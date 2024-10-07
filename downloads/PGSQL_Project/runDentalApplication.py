#! /usr/bin/env python

#  runElectionsApplication Solution

import psycopg2, sys, datetime

# usage()
# Print error messages to stderr
def usage():
    print("Usage:  python3 runDentalApplication.py userid pwd", file=sys.stderr)
    sys.exit(-1)
# end usage

# The three Python functions that for Lab4 should appear below.
# Write those functions, as described in Lab4 Section 4 (and Section 5,
# which describes the Stored Function used by the third Python function).
#
# Write the tests of those function in main, as described in Section 6
# of Lab4.


 # countNumberOfPatients (myConn, theDentistID):
 # The visits table tells us about visits made by a patient (patientID) to a dentist (dentistID).
 #
 # Besides the database connection, the countNumberOfPatients function has one parameter, an
 # integer, theDentistID.
 #
 # countNumberOfPatients counts the number of different patients that the dentis dentistID has,
 # based onthe number of different patient values that appears in the visits table.
 #
 # countNumberOfPatients returns that value.
 #
 # For more details, including error handling and return codes, see the Lab4 pdf.

def countNumberOfPatients (myConn, theDentistID):
    try: 
        myCursor = myConn.cursor()
        stmt = "SELECT COUNT(*) FROM Dentists WHERE dentistID = %s;"
        stmt2 = "SELECT COUNT(DISTINCT patientID) FROM Visits WHERE dentistID = %s;"
        myCursor.execute(stmt, (theDentistID, ))
        dentist_check = myCursor.fetchone()
        if dentist_check[0] == 0:
            return -1
        myCursor.execute(stmt2, (theDentistID, ))
        result = myCursor.fetchone()
        if result[0] == 0:
            return 0
        else:
            return result[0]
    except Exception as e: 
        print("An error occurred:", e)
        print("Statement", stmt, "or statement", stmt2, "is bad", file=sys.stderr)
        myCursor.close()
        myConn.close()
        sys.exit(-1)
    # Python function to be supplied by students
# end printNumPartyCandidatesAndOfficeHolders


# emphasizeToothSide (myConn, toothSide):
# In the Teeth table, the value of quadrant has been 'TR', 'BR', 'TL', or 'BL', indicating respectively a top right tooth, a bottom right
# tooth, a top left, and a bottom left tooth.
#
# Besides the database connection, emphasizeToothSide has another parameter, toothSide, which is a single character.
# If toothSize is 'L', then mphasizeToothSide should put 'LEFT ' in front of the toothName of the left teeth.
# If toothSize is 'R', then mphasizeToothSide should put 'RIGHT ' in front of the toothName of the right teeth.
# Other values of toothSize are errors.
#
# emphasizeToothSide should return the number of teeth whose toothName values were updated.
#
# For more details, including error handling, see the Lab4 pdf.

def emphasizeToothSide (myConn, toothSide):
    try: 
        myCursor = myConn.cursor()
        if toothSide == 'L':
            stmt = "UPDATE Teeth SET toothName = 'LEFT ' || toothName WHERE quadrant LIKE '_L';"
            myCursor.execute(stmt)
            count = "SELECT COUNT(*) FROM Teeth WHERE toothName LIKE 'LEFT%';"
            myCursor.execute(count)
        elif toothSide == 'R': 
            stmt = "UPDATE Teeth SET toothName = 'RIGHT ' || toothName WHERE quadrant LIKE '_R';"
            myCursor.execute(stmt)
            count = "SELECT COUNT(*) FROM Teeth WHERE toothName LIKE 'RIGHT%';"
            myCursor.execute(count)
        else:
            return -1       
    except Exception as e:
        print("An error occurred:", e)
        print("Statement", stmt, "is bad", file=sys.stderr)
        myCursor.close()
        myConn.close()
        sys.exit(-1)
    result = myCursor.fetchone()
    myCursor.close()
    return result[0]
    # Python function to be supplied by students
    # You'll need to figure out value to return.

# end emphasizeToothSide


# cancelSomeVisits (myConn, maxVisitCancellations :
# Besides the database connection, this Python function has one other parameter,
# maxVisitCancellations, which is an integer.
#
# cancelSomeVisits invokes a Stored Function, cancelSomeVisitsFunction, that you will need to
# implement and store in the database according to the description in Section 5.  The Stored
# Function cancelSomeVisitsFunction has all the same parameters as cancelSomeVisits (except
# for the database connection, which is not a parameter for the Stored Function), and it returns
# an integer.
#
# Section 5 of the Lab4 tells you which visits to cancel and explains the integer value
# that cancelSomeVisitsFunction returns.  The cancelSomeVisits Python function returns the
# the same integer value that the cancelSomeVisitsFunction Stored Function returns.
#
# cancelSomeVisitsFunction doesn’t print anything.  The cancelSomeVisits function must only
# invoke the Stored Function cancelSomeVisitsFunction, which does all of the work for this part
# of the assignment; cancelSomeVisits should not do any of the work itself.
#
# For more details, see the Lab4 pdf.

def cancelSomeVisits (myConn, maxVisitCancellations):

# We're giving you the code for cancelSomeVisits, but you'll have to write the
# Stored Function cancelSomeVisitsFunction yourselves in a PL/pgSQL file named
# cancelSomeVisitsFunctionFunction.pgsql
        
    try:
        myCursor = myConn.cursor()
        sql = "SELECT cancelSomeVisitsFunction(%s)"
        myCursor.execute(sql, (maxVisitCancellations, ))
    except Exception as e:
        print("An error occurred:", e)
        print("Call of cancelSomeVisitsFunction with argument", maxVisitCancellations, "had error", file=sys.stderr)
        myCursor.close()
        myConn.close()
        sys.exit(-1)
    row = myCursor.fetchone()
    myCursor.close()
    return(row[0])

#end cancelSomeVisits


def main():

    if len(sys.argv)!=3:
       usage()

    hostname = "cse182-db.lt.ucsc.edu"
    userID = sys.argv[1]
    pwd = sys.argv[2]

    # Try to make a connection to the database
    try:
        myConn = psycopg2.connect(host=hostname, user=userID, password=pwd)
    except:
        print("Connection to database failed", file=sys.stderr)
        sys.exit(-1)
        
    # We're making every SQL statement a transaction that commits.
    # Don't need to explicitly begin a transaction.
    # Could have multiple statement in a transaction, using myConn.commit when we want to commit.
    
    myConn.autocommit = True
    
    # There are other correct ways of writing all of these calls correctly in Python.
        
    # Perform tests of countNumberOfPatients, as described in Section 6 of Lab4.
    # Print their outputs (including error outputs) here, not in countNumberOfPatients.
    # You may use a Python method to help you do the printing.
    d1 = 11
    d2 = 17
    d3 = 44
    d4 = 66
    r1 = countNumberOfPatients(myConn, d1)
    r2 = countNumberOfPatients(myConn, d2)
    r3 = countNumberOfPatients(myConn, d3)
    r4 = countNumberOfPatients(myConn, d4)
    if r1 >= 0:
        print("Number of patients for dentist {} is {}\n".format(d1, r1))
    else:
        print("Dentist ID: {}, patientNum {}. ERROR: Dentist doesn't exist\n".format(d1, r1))
        
    if r2 >= 0:
        print("Number of patients for dentist {} is {}\n".format(d2, r2))
    else:
        print("Dentist ID: {}, patientNum {}. ERROR: Dentist doesn't exist\n".format(d2, r2))    
            
    if r3 >= 0:
        print("Number of patients for dentist {} is {}\n".format(d3, r3))
    else:
        print("Dentist ID: {}, patientNum {}. ERROR: Dentist doesn't exist\n".format(d3, r3))
        
    if r4 >= 0:
        print("Number of patients for dentist {} is {}\n".format(d4, r4))
    else:
        print("Dentist ID: {}, patientNum {}. ERROR: Dentist doesn't exist\n".format(d4, r4))
    # Perform tests of emphasizeToothSide, as described in Section 6 of Lab4.
    # Print their outputs (including error outputs) here, not in emphasizeToothSide.
    # You may use a Python method to help you do the printing.
    ts1 = 'L'
    ts2 = 'R'
    ts3 = 'C'
    r2_1 = emphasizeToothSide(myConn, ts1)
    r2_2 = emphasizeToothSide(myConn, ts2)
    r2_3 = emphasizeToothSide(myConn, ts3)
    
    if r2_1 < 0:
        print("Tooth side: {}, ERROR: Invalid tooth side is not 'R' or 'L'.\n".format(ts1))
    else:
        print("Number of teeth whose toothName values for {} were updated by emphasizeToothSide is {}\n".format(ts1,r2_1))
 
    if r2_2 < 0:
        print("Tooth side: {}, ERROR: Invalid tooth side is not 'R' or 'L'.\n".format(ts2))
    else:
        print("Number of teeth whose toothName values for {} were updated by emphasizeToothSide is {}\n".format(ts2,r2_2))

    if r2_3 < 0:
        print("Tooth side: {}, ERROR: Invalid tooth side is not 'R' or 'L'.\n".format(ts3))
    else:
        print("Number of teeth whose toothName values for {} were updated by emphasizeToothSide is {}\n".format(ts3,r2_3))       
    
    
    # Perform tests of cancelSomeVisits, as described in Section 6 of Lab4,
    # Print their outputs (including error outputs) here, not in cancelSomeVisits.
    # You may use a Python method to help you do the printing.
    mc1 = 2
    mc2 = 4
    mc3 = 3
    mc4 = 1
    cs1 = cancelSomeVisits(myConn, mc1)
    cs2 = cancelSomeVisits(myConn, mc2)
    cs3 = cancelSomeVisits(myConn, mc3)
    cs4 = cancelSomeVisits(myConn, mc4)
    
    if cs1 >= 0:
        print("Number of visits where cancelled for maxVisitCancellations value {} is {}\n".format(mc1, cs1))
    else:
        print("maxVisitCancellations: {}, number of cancelled: {}, ERROR: cancel value is less than or equal to 0\n".format(mc1, cs1))
  
    if cs2 >= 0:
        print("Number of visits where cancelled for maxVisitCancellations value {} is {}\n".format(mc2, cs2))
    else:
        print("maxVisitCancellations: {}, number of cancelled: {}, ERROR: cancel value is less than or equal to 0\n".format(mc2, cs2))
    
    if cs3 >= 0:
        print("Number of visits where cancelled for maxVisitCancellations value {} is {}\n".format(mc3, cs3))
    else:
        print("maxVisitCancellations: {}, number of cancelled: {}, ERROR: cancel value is less than or equal to 0\n".format(mc3, cs3))
    
    if cs4 >= 0:
        print("Number of visits where cancelled for maxVisitCancellations value {} is {}\n".format(mc4, cs4))
    else:
        print("maxVisitCancellations: {}, number of cancelled: {}, ERROR: cancel value is less than or equal to 0\n".format(mc4, cs4))
    myConn.close()
    sys.exit(0)
#end

#------------------------------------------------------------------------------
if __name__=='__main__':

    main()

# end
