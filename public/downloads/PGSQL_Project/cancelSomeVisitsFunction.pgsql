CREATE OR REPLACE FUNCTION cancelSomeVisitsFunction(maxVisitCancellations INTEGER)
RETURNS INTEGER AS $$
DECLARE
    numCancelled    INTEGER; -- Number of cancelled visits, returned value
    futureVisits    INTEGER; -- future visits
    patientRecord   RECORD; -- patient info
    checkpoint      INTEGER; -- checkpoint to see if cancellation is needed

    -- Cursor declaration for selecting patients with unpaid visits before June 4, 2024
    patientCursor CURSOR FOR
        SELECT p.patientID, p.patientName, COUNT(tv.visitStartTimestamp)
        FROM Patients p
        JOIN TreatmentsDuringVisits tv ON p.patientID = tv.patientID
        WHERE tv.wasPaymentReceived = FALSE AND DATE(tv.visitStartTimestamp) <= '2024-06-04'
        GROUP BY p.patientID
        ORDER BY COUNT(tv.visitStartTimestamp) DESC, patientName;

    -- Cursor declaration for counting future visits for a specific patient
    futureCursor CURSOR (patID INTEGER) FOR
        SELECT COUNT(v.visitStartTimestamp)
        FROM Visits v
        WHERE DATE(v.visitStartTimestamp) > '2024-06-04' AND v.patientID = patID;
BEGIN
    IF maxVisitCancellations <= 0 THEN
        RETURN -1;
    END IF;

    numCancelled := 0;
    OPEN patientCursor;
    LOOP
        FETCH patientCursor INTO patientRecord;
        EXIT WHEN NOT FOUND;

        OPEN futureCursor(patientRecord.patientID);
        FETCH futureCursor INTO futureVisits; -- put future visit count in this 
        CLOSE futureCursor;

        checkpoint := (maxVisitCancellations - numCancelled) - futureVisits; -- calculating to see how many visits are left to be cancelled
        
        IF checkpoint < 0 THEN -- no cancellations left so exit loop
            RETURN numCancelled;
            EXIT;
        END IF;
        
        DELETE FROM Visits  -- remove future visit
        WHERE patientID = patientRecord.patientID 
        AND DATE(visitStartTimestamp) > '2024-06-04';

        numCancelled := numCancelled + futureVisits;   -- update amount of cancelled visits
        EXIT WHEN numCancelled >= maxVisitCancellations;
    END LOOP;
    CLOSE patientCursor;
    RETURN numCancelled;
END;
$$ LANGUAGE plpgsql;