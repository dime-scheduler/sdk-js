
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class Resource extends ImportModel implements IImportModel {
    @ImportProperty("")
    resourceNo?: string;

    @ImportProperty("")
    sourceApp?: string;

    @ImportProperty("")
    sourceType?: string;

    @ImportProperty("")
    resourceType?: string;

    @ImportProperty("")
    resourceTypeId?: number | null;

    @ImportProperty("")
    resourceName?: string;

    @ImportProperty("")
    displayName?: string;

    @ImportProperty("")
    department?: string;

    @ImportProperty("")
    email?: string;

    @ImportProperty("")
    phone?: string;

    @ImportProperty("")
    mobilePhone?: string;

    @ImportProperty("")
    replacementResource?: boolean;

    @ImportProperty("")
    fieldServiceEmail?: string;

    @ImportProperty("")
    personalEmail?: string;

    @ImportProperty("")
    gpsTrackingResourceNo?: string;

    @ImportProperty("")
    homeAddress?: string;

    @ImportProperty("")
    homeAddressGeoLong?: number | null;

    @ImportProperty("")
    homeAddressGeoLat?: number | null;

    @ImportProperty("")
    homePhone?: string;

    @ImportProperty("")
    homeEmail?: string;

    @ImportProperty("")
    homeStreet?: string;

    @ImportProperty("")
    homeStreetNo?: string;

    @ImportProperty("")
    homePostcode?: string;

    @ImportProperty("")
    homeCity?: string;

    @ImportProperty("")
    homeCounty?: string;

    @ImportProperty("")
    homeState?: string;

    @ImportProperty("")
    homeCountry?: string;

    @ImportProperty("")
    homeRegion?: string;

    @ImportProperty("")
    teamCode?: string;

    @ImportProperty("")
    teamName?: string;

    @ImportProperty("")
    teamType?: string;

    @ImportProperty("")
    teamSort?: number;

    @ImportProperty("")
    teamMemberType?: string;

    @ImportProperty("")
    teamMemberSort?: number;

    @ImportProperty("")
    doNotShow?: boolean;

    @ImportProperty("")
    inServiceFrom?: string | null;

    @ImportProperty("")
    inServiceTill?: string | null;

    @ImportProperty("")
    exchangeIntegrationEnabled?: boolean;

    @ImportProperty("")
    url1?: string;

    @ImportProperty("")
    urlDescription1?: string;

    @ImportProperty("")
    url2?: string;

    @ImportProperty("")
    urlDescription2?: string;

    @ImportProperty("")
    url3?: string;

    @ImportProperty("")
    urlDescription3?: string;

    @ImportProperty("")
    bulkPlanning?: boolean;

    @ImportProperty("")
    bulkCapacity?: number;

    @ImportProperty("")
    resourceGpsTrackingEnabled?: boolean;

    @ImportProperty("")
    pin?: string;

    @ImportProperty("")
    freeText1?: string;

    @ImportProperty("")
    freeText2?: string;

    @ImportProperty("")
    freeText3?: string;

    @ImportProperty("")
    freeText4?: string;

    @ImportProperty("")
    freeText5?: string;

    @ImportProperty("")
    freeText6?: string;

    @ImportProperty("")
    freeText7?: string;

    @ImportProperty("")
    freeText8?: string;

    @ImportProperty("")
    freeText9?: string;

    @ImportProperty("")
    freeText10?: string;

    @ImportProperty("")
    freeText11?: string;

    @ImportProperty("")
    freeText12?: string;

    @ImportProperty("")
    freeText13?: string;

    @ImportProperty("")
    freeText14?: string;

    @ImportProperty("")
    freeText15?: string;

    @ImportProperty("")
    freeText16?: string;

    @ImportProperty("")
    freeText17?: string;

    @ImportProperty("")
    freeText18?: string;

    @ImportProperty("")
    freeText19?: string;

    @ImportProperty("")
    freeText20?: string;

    @ImportProperty("")
    freeDecimal1?: number;

    @ImportProperty("")
    freeDecimal2?: number;

    @ImportProperty("")
    freeDecimal3?: number;

    @ImportProperty("")
    freeDecimal4?: number;

    @ImportProperty("")
    freeDecimal5?: number;

    @ImportProperty("")
    freeDate1?: string | null;

    @ImportProperty("")
    freeDate2?: string | null;

    @ImportProperty("")
    freeDate3?: string | null;

    @ImportProperty("")
    freeDate4?: string | null;

    @ImportProperty("")
    freeDate5?: string | null;

    @ImportProperty("")
    freeBit1?: boolean;

    @ImportProperty("")
    freeBit2?: boolean;

    @ImportProperty("")
    freeBit3?: boolean;

    @ImportProperty("")
    freeBit4?: boolean;

    @ImportProperty("")
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