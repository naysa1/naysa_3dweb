-- Sample script file to populate the Dentist Schema

-- Patients(patientID, patientName, address, creditCardType, creditCardNumber, expirationDate, isCardValid)
COPY Patients FROM stdin USING DELIMITERS '|';
1|John Doe|123 Main St, New York, NY|V|\N|2025-12-31|true
2|Jane Smith|123 Main St, New York, NY|V|\N|\N|\N
3|Michael Johnson|789 Elm Rd, Chicago, IL|A|246813579|2028-10-15|true
4|Emily Davis|321 Pine Blvd, Houston, TX|D|246813579|2026-05-20|true
5|Robert Brown|654 Cedar Dr, Phoenix, AZ|V|\N|\N|false
6|Jessica Wilson|987 Maple Ln, Philadelphia, PA|\N|\N|\N|true
7|William Martinez|741 Birch Ave, San Antonio, TX|V|741852963|2025-08-12|true
8|Amanda Taylor|369 Willow Ct, San Diego, CA|D|963852741|2026-11-30|false
\.

-- Dentists(dentistID, dentistName, address, dentalSchool, graduationDate, isMemberADA)
COPY Dentists FROM stdin USING DELIMITERS '|';
11|Michael Johnson|123 Century St, New York, NY|Michigan School of Dentistry|2005-12-10|true
22|Sarah Lee|456 Oak Ave, Los Angeles, CA|UCLA School of Dentistry|2016-08-15|true
33|David Smith|789 Green Rd, Chicago, IL|Pennsylvania School of Dental Medicine|2014-12-10|false
44|Emily Davis|321 Pine Blvd, Houston, TX|UTHealth School of Dentistry|2006-03-25|true
55|John Anderson|654 Cedar Dr, Phoenix, AZ|Arizona School of Oral Health|2005-02-25|true
66|Jessica Martinez|987 Maple Ln, Miami, FL|Florida College of Dentistry|2005-02-25|true
\.

-- Teeth(toothNumber, toothName, quadrant)
COPY Teeth FROM stdin USING DELIMITERS '|';
1|Wisdom Tooth|TR
2|Molar|TR
3|Molar|TR
4|Bicuspid|TR
5|Bicuspid|TR
6|Canine|TR
7|Incisor|TR
8|Incisor|TR
9|Incisor|TR
10|Incisor|TL
11|Canine|TL
12|Bicuspid|TL
13|Bicuspid|TL
14|Molar|TL
15|Molar|TL
16|Wisdom Tooth|TL
17|Wisdom Tooth|BL
18|Molar|BL
19|Molar|BL
20|Bicuspid|BL
21|Bicuspid|BL
22|Canine|BL
23|Incisor|BL
24|Incisor|BL
25|Incisor|BR
26|Incisor|BR
27|Canine|BR
28|Bicuspid|BR
29|Bicuspid|BR
30|Molar|BR
31|Molar|BR
32|Wisdom Tooth|BR
\.

-- Visits(patientID, dentistID visitStartTimestamp, visitDuration)
COPY Visits FROM stdin USING DELIMITERS '|';
1|44|2023-12-15 09:00:00|1 hour
2|22|2024-02-20 10:30:00|1 hour
8|11|2024-01-20 12:30:00|44 minutes
3|11|2024-04-01 11:15:00|40 minutes
4|33|2024-03-18 13:00:00|34 minutes
5|11|2024-03-19 14:45:00|1 hours 32 minutes
5|33|2024-03-30 15:00:00|1 hour
5|33|2024-05-01 11:00:00|1 hour 5 minutes
1|33|2024-01-27 16:30:00|1 hour 30 minutes
2|44|2024-03-21 09:30:00|40 minutes
6|33|2024-01-24 11:00:00|1 hour 20 minutes
6|11|2023-12-24 11:00:00|1 hour 1 minute
7|55|2024-02-03 08:00:00|1 hour 30 minutes
1|44|2024-06-30 03:30:00|46 minutes
4|33|2024-08-26 13:00:00|12 minutes
5|33|2024-06-05 12:00:00|1 hour
5|33|2024-07-08 09:00:00|1 hour 15 minutes
5|33|2024-08-13 10:30:00|55 minutes
6|11|2024-06-04 13:00:00|1 hour
6|11|2024-06-09 14:00:00|1 hour 10 minutes
6|33|2024-09-25 11:15:00|1 hour 05 minutes
7|55|2024-06-15 08:40:00|1 hour
\.

-- DentalTreatments(treatmentType, treatmentDuration, treatmentFee)
COPY DentalTreatments FROM stdin USING DELIMITERS '|';
Filling|30 minutes|25.00
Crown|1 hour|50.00
Root canal|1 hour 30 minutes|100.00
Extraction|40 minutes|48.25
\.

-- TreatmentsDuringVisits(patientID, dentistID, visitStartTimestamp, toothNumber, treatmentType, wasPaymentReceived)
COPY TreatmentsDuringVisits FROM stdin USING DELIMITERS '|';
1|44|2023-12-15 09:00:00|20|Crown|true
1|33|2024-01-27 16:30:00|3|Crown|false
1|33|2024-01-27 16:30:00|15|Crown|true
2|22|2024-02-20 10:30:00|24|Crown|false
2|44|2024-03-21 09:30:00|1|Extraction|true
3|11|2024-04-01 11:15:00|9|Extraction|false
4|33|2024-03-18 13:00:00|3|Filling|false
4|33|2024-03-18 13:00:00|2|Filling|false
5|11|2024-03-19 14:45:00|9|Root canal|false
5|11|2024-03-19 14:45:00|31|Filling|true
5|33|2024-03-30 15:00:00|22|Extraction|false
5|33|2024-03-30 15:00:00|23|Filling|false
5|33|2024-05-01 11:00:00|23|Extraction|false
5|33|2024-05-01 11:00:00|31|Extraction|false
6|33|2024-01-24 11:00:00|14|Root canal|false
6|11|2023-12-24 11:00:00|16|Crown|false
6|11|2023-12-24 11:00:00|17|Crown|false
7|55|2024-02-03 08:00:00|14|Root canal|false
8|11|2024-01-20 12:30:00|24|Extraction|true
\.

