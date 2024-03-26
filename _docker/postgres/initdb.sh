#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "admin" --dbname "postgres" <<-EOSQL

  SELECT 'CREATE DATABASE strapi1 OWNER "admin"' WHERE NOT EXISTS(SELECT FROM pg_database WHERE datname = 'strapi1')\gexec

  SELECT 'CREATE DATABASE strapi2 OWNER "admin"' WHERE NOT EXISTS(SELECT FROM pg_database WHERE datname = 'strapi2')\gexec

EOSQL
