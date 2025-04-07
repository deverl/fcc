DROP TABLE IF EXISTS hd;

CREATE TABLE hd (
    record_type TEXT,
    sys_id NUMERIC,
    file_number TEXT,
    ebf_number TEXT,
    call_sign TEXT,
    license_status TEXT,
    radio_service_code TEXT,
    grant_date TEXT,
    expired_date TEXT,
    cancellation_date TEXT,
    eligibility_rule_num TEXT,
    reserved1 TEXT,
    alien TEXT,
    alien_government TEXT,
    alien_corporation TEXT,
    alien_officer TEXT,
    alien_control TEXT,
    revoked TEXT,
    convicted TEXT,
    adjudged TEXT,
    reserved2 TEXT,
    common_carrier TEXT,
    non_common_carrier TEXT,
    private_comm TEXT,
    fixed TEXT,
    mobile TEXT,
    radiolocation TEXT,
    satellite TEXT,
    dev_sta_demo TEXT,
    interconnected_service TEXT,
    certifier_first_name TEXT,
    certifier_middle_initial TEXT,
    certifier_last_name TEXT,
    certifier_suffix TEXT,
    certifier_title TEXT,
    female TEXT,
    black_or_african_american TEXT,
    native_american TEXT,
    hawaiian TEXT,
    asian TEXT,
    white TEXT,
    hispanic TEXT,
    effective_date TEXT,
    last_action_date TEXT,
    auction_id INT,
    broadcast_regulatory_status TEXT,
    band_manager_regulatory_status TEXT,
    broadcast_services_type TEXT,
    alien_ruling TEXT,
    licensee_name_change TEXT,
    whitespace_indicator TEXT,
    operation_perf_requirement_choice TEXT,
    operation_perf_requirement_answer TEXT,
    discontinuation_of_service TEXT,
    regulatory_compliance TEXT,
    _900_mhz_eligibility_cert TEXT,
    _900_mhz_transition_plan_cert TEXT,
    _900_mhz_return_spectrum_cert TEXT,
    _900_mhz_payment_cert TEXT
);

.mode csv
.separator "|"
.import HD.dat hd



DROP TABLE IF EXISTS en;

CREATE TABLE en (
    record_type TEXT,
    sys_id NUMERIC,
    file_number TEXT,
    ebf_number TEXT,
    call_sign TEXT,
    entity_type TEXT,
    licensee_id TEXT,
    entity_name TEXT,
    first_name TEXT,
    middle_initial TEXT,
    last_name TEXT,
    suffix TEXT,
    phone TEXT,
    fax TEXT,
    email TEXT,
    street_address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    po_box TEXT,
    attention_line TEXT,
    sgin TEXT,
    frn TEXT,
    app_type_code TEXT,
    app_type_code_other TEXT,
    status_code TEXT,
    status_date TEXT,
    _37_ghz_lic_type TEXT,
    linked_sys_id NUMERIC,
    linked_call_sign TEXT
);


.mode csv
.separator "|"
.import en.csv en



DROP TABLE IF EXISTS am;

CREATE TABLE am (
    record_type TEXT,
    sys_id NUMERIC,
    file_number TEXT,
    ebf_number TEXT,
    call_sign TEXT,
    operator_class TEXT,
    group_code TEXT,
    region_code TEXT,
    trustee_call_sign TEXT,
    trustee_indicator TEXT,
    physician_cert TEXT,
    ve_signature TEXT,
    systematic_call_sign_change TEXT,
    vanity_call_sign_change TEXT,
    vanity_relationship TEXT,
    previous_call_sign TEXT,
    previous_operator_class TEXT,
    trustee_name TEXT
);

.mode csv
.separator "|"
.import AM.dat am



CREATE INDEX en_sys_id_index
    on en (sys_id);
CREATE INDEX en_first_name_last_name_index
    on en (first_name, last_name);
CREATE INDEX en_city_state_index
    on en (city, state);
CREATE INDEX en_frn_index
    on en (frn);
    
CREATE INDEX hd_sys_id_index
    on hd (sys_id);
CREATE INDEX hd_call_sign_index
    on hd (call_sign);
CREATE INDEX hd_license_status_index
    on hd (license_status);
CREATE INDEX hd_certifier_first_name_certifier_last_name_index
    on hd (certifier_first_name, certifier_last_name);
CREATE INDEX hd_grant_date_index
    on hd (grant_date);
    
CREATE INDEX am_sys_id_index
    on am (sys_id);
CREATE INDEX am_call_sign
    on am (call_sign);
CREATE INDEX am_operator_class
    on am (operator_class);


select en.call_sign,
       hd.license_status,
       am.operator_class,
       am.region_code,
       en.first_name,
       en.last_name
from en
     join hd on hd.sys_id = en.sys_id
     join am on am.sys_id = en.sys_id
where (en.call_sign = "W7DNS" or en.call_sign = "KE7HT")
      and license_status = "A";



