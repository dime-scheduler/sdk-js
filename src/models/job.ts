
import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";
import Importance from "./constants/importance";

class Job extends ImportModel implements IImportModel {

    @ImportProperty("SourceApp")
    sourceApp?: string;

    @ImportProperty("SourceType")
    sourceType?: string;

    @ImportProperty("JobNo")
    jobNo?: string;

    @ImportProperty("ShortDescription")
    shortDescription?: string;

    @ImportProperty("Description")
    description?: string;

    @ImportProperty("Type")
    type?: string;

    @ImportProperty("Name")
    name?: string;

    @ImportProperty("Category")
    category?: string;

    @ImportProperty("TimeMarker")
    timeMarker?: string;

    @ImportProperty("Pin")
    pin?: string;

    @ImportProperty("CustomerNo")
    customerNo?: string;

    @ImportProperty("CustomerName")
    customerName?: string;

    @ImportProperty("CustomerAddress")
    customerAddress?: string;

    @ImportProperty("CustomerAddressGeoLong")
    customerAddressGeoLong?: number;

    @ImportProperty("CustomerAddressGeoLat")
    customerAddressGeoLat?: number;

    @ImportProperty("CustomerPhone")
    customerPhone?: string;

    @ImportProperty("CustomerEmail")
    customerEmail?: string;

    @ImportProperty("ContactNo")
    contactNo?: string;

    @ImportProperty("ContactName")
    contactName?: string;

    @ImportProperty("ContactAddress")
    contactAddress?: string;

    @ImportProperty("ContactAddressGeoLong")
    contactAddressGeoLong?: number;

    @ImportProperty("ContactAddressGeoLat")
    contactAddressGeoLat?: number

    @ImportProperty("ContactPhone")
    contactPhone?: string;

    @ImportProperty("ContactEmail")
    contactEmail?: string;

    @ImportProperty("SiteNo")
    siteNo?: string;

    @ImportProperty("SiteName")
    siteName?: string;

    @ImportProperty("SiteAddress")
    siteAddress?: string;

    @ImportProperty("SiteAddressGeoLong")
    siteAddressGeoLong?: number;

    @ImportProperty("SiteAddressGeoLat")
    siteAddressGeoLat?: number;

    @ImportProperty("SitePhone")
    sitePhone?: string;

    @ImportProperty("SiteEmail")
    siteEmail?: string;

    @ImportProperty("SiteRegion")
    siteRegion?: string;

    @ImportProperty("SiteStreet")
    siteStreet?: string;

    @ImportProperty("SiteStreetNo")
    siteStreetNo?: string;

    @ImportProperty("SitePostcode")
    sitePostcode?: string;

    @ImportProperty("SiteCity")
    siteCity?: string;

    @ImportProperty("SiteCounty")
    siteCounty?: string;

    @ImportProperty("SiteState")
    siteState?: string;

    @ImportProperty("SiteCountry")
    siteCountry?: string;

    @ImportProperty("SiteFromNo")
    siteFromNo?: string;

    @ImportProperty("SiteFromName")
    siteFromName?: string;

    @ImportProperty("SiteFromAddress")
    siteFromAddress?: string;

    @ImportProperty("SiteFromAddressGeoLong")
    siteFromAddressGeoLong?: number;

    @ImportProperty("SiteFromAddressGeoLat")
    siteFromAddressGeoLat?: number;

    @ImportProperty("SiteFromPhone")
    siteFromPhone?: string;

    @ImportProperty("SiteFromEmail")
    siteFromEmail?: string;

    @ImportProperty("SiteFromRegion")
    siteFromRegion?: string;

    @ImportProperty("SiteFromStreet")
    siteFromStreet?: string;

    @ImportProperty("SiteFromStreetNo")
    siteFromStreetNo?: string;

    @ImportProperty("SiteFromPostcode")
    siteFromPostcode?: string;

    @ImportProperty("SiteFromCity")
    siteFromCity?: string;

    @ImportProperty("SiteFromCounty")
    siteFromCounty?: string;

    @ImportProperty("SiteFromState")
    siteFromState?: string;

    @ImportProperty("SiteFromCountry")
    siteFromCountry?: string;

    @ImportProperty("BillNo")
    billNo?: string;

    @ImportProperty("BillName")
    billName?: string;

    @ImportProperty("BillAddress")
    billAddress?: string;

    @ImportProperty("BillAddressGeoLong")
    billAddressGeoLong?: number;

    @ImportProperty("BillAddressGeoLat")
    billAddressGeoLat?: number;

    @ImportProperty("BillPhone")
    billPhone?: string;

    @ImportProperty("BillEmail")
    billEmail?: string;

    @ImportProperty("BillRegion")
    billRegion?: string;

    @ImportProperty("Importance")
    importance?: Importance | number;

    @ImportProperty("CreationDateTime")
    creationDateTime?: Date;

    @ImportProperty("CustomerReference")
    customerReference?: string;

    @ImportProperty("Language")
    language?: string;

    @ImportProperty("Responsible")
    responsible?: string;

    @ImportProperty("Creator")
    creator?: string;

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
    freeBit1?: boolean = false;

    @ImportProperty("FreeBit2")
    freeBit2?: boolean = false;

    @ImportProperty("FreeBit3")
    freeBit3?: boolean = false;

    @ImportProperty("FreeBit4")
    freeBit4?: boolean = false;

    @ImportProperty("FreeBit5")
    freeBit5?: boolean = false;

    @ImportProperty("EnableManualSelection")
    enableManualSelection?: boolean;

    @ImportProperty("AvailableInGantt")
    availableInGantt?: boolean;

    @ImportProperty("StartDate")
    startDate?: Date;

    @ImportProperty("EndDate")
    endDate?: Date;

    @ImportProperty("AllowDependencies")
    allowDependencies?: boolean = true;

    @ImportProperty("Note")
    note?: string;

    @ImportProperty("OverRuleGanttPlanning")
    overRuleGanttPlanning?: boolean;

    @ImportProperty("ReadOnly")
    readOnly?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertJob");
            case CrudType.Delete:
                return super.createAppendRequest("mboc_deleteJob");
        }
    }
}

export default Job;