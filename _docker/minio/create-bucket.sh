#!/bin/sh
sleep 20
/usr/bin/mc config host add myminio http://minio:9000 admin admin1admin1;
/usr/bin/mc mb myminio/strapi1;
/usr/bin/mc anonymous set download myminio/strapi1;
/usr/bin/mc mb myminio/strapi2;
/usr/bin/mc anonymous set download myminio/strapi2;
exit 0;
