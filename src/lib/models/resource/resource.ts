import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class Resource extends ImportModel implements IImportModel {

    @ImportProperty("ResourceNo")
    resourceNo?: string;

    @ImportProperty("SourceApp")
    sourceApp?: string;

    @ImportProperty("SourceType")
    sourceType?: string;

    @ImportProperty("ResourceType")
    resourceType?: string;

    @ImportProperty("ResourceTypeId")
    resourceTypeId?: number | null;

    @ImportProperty("ResourceName")
    resourceName?: string;

    @ImportProperty("DisplayName")
    displayName?: string;

    @ImportProperty("Department")
    department?: string;

    @ImportProperty("Email")
    email?: string;

    @ImportProperty("Phone")
    phone?: string;

    @ImportProperty("MobilePhone")
    mobilePhone?: string;

    @ImportProperty("ReplacementResource")
    replacementResource?: boolean;

    @ImportProperty("FieldServiceEmail")
    fieldServiceEmail?: string;

    @ImportProperty("PersonalEmail")
    personalEmail?: string;

    @ImportProperty("GpsTrackingResourceNo")
    gpsTrackingResourceNo?: string;

    @ImportProperty("HomeAddress")
    homeAddress?: string;

    @ImportProperty("HomeAddressGeoLong")
    homeAddressGeoLong?: number | null;

    @ImportProperty("HomeAddressGeoLat")
    homeAddressGeoLat?: number | null;

    @ImportProperty("HomePhone")
    homePhone?: string;

    @ImportProperty("HomeEmail")
    homeEmail?: string;

    @ImportProperty("HomeStreet")
    homeStreet?: string;

    @ImportProperty("HomeStreetNo")
    homeStreetNo?: string;

    @ImportProperty("HomePostcode")
    homePostcode?: string;

    @ImportProperty("HomeCity")
    homeCity?: string;

    @ImportProperty("HomeCounty")
    homeCounty?: string;

    @ImportProperty("HomeState")
    homeState?: string;

    @ImportProperty("HomeCountry")
    homeCountry?: string;

    @ImportProperty("HomeRegion")
    homeRegion?: string;

    @ImportProperty("TeamCode")
    teamCode?: string;

    @ImportProperty("TeamName")
    teamName?: string;

    @ImportProperty("TeamType")
    teamType?: string;

    @ImportProperty("TeamSort")
    teamSort?: number;

    @ImportProperty("TeamMemberType")
    teamMemberType?: string;

    @ImportProperty("TeamMemberSort")
    teamMemberSort?: number;

    @ImportProperty("DoNotShow")
    doNotShow?: boolean;

    @ImportProperty("InServiceFrom")
    inServiceFrom?: string | null;

    @ImportProperty("InServiceTill")
    inServiceTill?: string | null;

    @ImportProperty("ExchangeIntegrationEnabled")
    exchangeIntegrationEnabled?: boolean;

    @ImportProperty("url1")
    url1?: string;

    @ImportProperty("urldesc1")
    urlDescription1?: string;

    @ImportProperty("url2")
    url2?: string;

    @ImportProperty("urldesc2")
    urlDescription2?: string;

    @ImportProperty("url3")
    url3?: string;

    @ImportProperty("urldesc3")
    urlDescription3?: string;

    @ImportProperty("BulkPlanning")
    bulkPlanning?: boolean;

    @ImportProperty("BulkCapacity")
    bulkCapacity?: number;

    @ImportProperty("ResourceGpsTrackingEnabled")
    resourceGpsTrackingEnabled?: boolean;

    @ImportProperty("Pin")
    pin?: string;

    @ImportProperty("FreeText1")
    freeText1?: string;

    @ImportProperty("FreeText2")
    freeText2?: string;

    @ImportProperty("FreeText3")
    freeText3?: string;

    @ImportProperty("FreeText4")
    freeText4?: string;

    @ImportProperty("FreeText5")
    freeText5?: string;

    @ImportProperty("FreeText6")
    freeText6?: string;

    @ImportProperty("FreeText7")
    freeText7?: string;

    @ImportProperty("FreeText8")
    freeText8?: string;

    @ImportProperty("FreeText9")
    freeText9?: string;

    @ImportProperty("FreeText10")
    freeText10?: string;

    @ImportProperty("FreeText11")
    freeText11?: string;

    @ImportProperty("FreeText12")
    freeText12?: string;

    @ImportProperty("FreeText13")
    freeText13?: string;

    @ImportProperty("FreeText14")
    freeText14?: string;

    @ImportProperty("FreeText15")
    freeText15?: string;

    @ImportProperty("FreeText16")
    freeText16?: string;

    @ImportProperty("FreeText17")
    freeText17?: string;

    @ImportProperty("FreeText18")
    freeText18?: string;

    @ImportProperty("FreeText19")
    freeText19?: string;

    @ImportProperty("FreeText20")
    freeText20?: string;

    @ImportProperty("FreeDecimal1")
    freeDecimal1?: number;

    @ImportProperty("FreeDecimal2")
    freeDecimal2?: number;

    @ImportProperty("FreeDecimal3")
    freeDecimal3?: number;

    @ImportProperty("FreeDecimal4")
    freeDecimal4?: number;

    @ImportProperty("FreeDecimal5")
    freeDecimal5?: number;

    @ImportProperty("FreeDate1")
    freeDate1?: string | null;

    @ImportProperty("FreeDate2")
    freeDate2?: string | null;

    @ImportProperty("FreeDate3")
    freeDate3?: string | null;

    @ImportProperty("FreeDate4")
    freeDate4?: string | null;

    @ImportProperty("FreeDate5")
    freeDate5?: string | null;

    @ImportProperty("FreeBit1")
    freeBit1?: boolean;

    @ImportProperty("FreeBit2")
    freeBit2?: boolean;

    @ImportProperty("FreeBit3")
    freeBit3?: boolean;

    @ImportProperty("FreeBit4")
    freeBit4?: boolean;

    @ImportProperty("FreeBit5")
    freeBit5?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertResource");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteResource");
        }
    }
}