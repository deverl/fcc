#!/bin/bash

TEMPFILE=$(mktemp)

cat << 'EOF' > $TEMPFILE
USE fcc;

SELECT en.call_sign,
       -- hd.license_status as status,
       am.operator_class as class,
       en.frn,
       am.region_code as region,
       if(dmr.radio_id IS NOT NULL, dmr.radio_id, "") AS dmr_id,
       en.first_name,
       en.last_name,
       en.street_address,
       en.city,
       en.state
FROM en JOIN hd ON hd.sys_id = en.sys_id
JOIN am ON am.sys_id = en.sys_id
LEFT JOIN dmr ON dmr.call_sign = en.call_sign
WHERE en.city = "Eagle"
  AND en.state = "ID"
  AND hd.license_status = 'A'
ORDER BY en.state ASC, en.city ASC, en.last_name ASC, en.first_name ASC, dmr_id ASC
;
EOF

mysql -u fccuser -pfccuser -t < $TEMPFILE

rm -rf $TEMPFILE
