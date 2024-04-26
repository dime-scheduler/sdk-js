
import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

class Job extends ImportModel implements IImportModel {

    @ImportProperty()
    SourceApp?: string;

    @ImportProperty()
    SourceType?: string;

    @ImportProperty()
    JobNo?: string;

    @ImportProperty()
    ShortDescription?: string;

    @ImportProperty()
    Description?: string;

    @ImportProperty()
    Type?: string;

    @ImportProperty()
    Name?: string;

    @ImportProperty()
    Category?: string;

    @ImportProperty()
    TimeMarker?: string;

    @ImportProperty()
    Pin?: string;

    @ImportProperty()
    CustomerNo?: string;

    @ImportProperty()
    CustomerName?: string;

    @ImportProperty()
    CustomerAddress?: string;

    @ImportProperty()
    CustomerAddressGeoLong?: number;

    @ImportProperty()
    CustomerAddressGeoLat?: number;

    @ImportProperty()
    CustomerPhone?: string;

    @ImportProperty()
    CustomerEmail?: string;

    @ImportProperty()
    ContactNo?: string;

    @ImportProperty()
    ContactName?: string;

    @ImportProperty()
    ContactAddress?: string;

    @ImportProperty()
    ContactAddressGeoLong?: number;

    @ImportProperty()
    ContactAddressGeoLat?: number

    @ImportProperty()
    ContactPhone?: string;

    @ImportProperty()
    ContactEmail?: string;

    @ImportProperty()
    SiteNo?: string;

    @ImportProperty()
    SiteName?: string;

    @ImportProperty()
    SiteAddress?: string;

    @ImportProperty()
    SiteAddressGeoLong?: number;

    @ImportProperty()
    SiteAddressGeoLat?: number;

    @ImportProperty()
    SitePhone?: string;

    @ImportProperty()
    SiteEmail?: string;

    @ImportProperty()
    SiteRegion?: string;

    @ImportProperty()
    SiteStreet?: string;

    @ImportProperty()
    SiteStreetNo?: string;

    @ImportProperty()
    SitePostcode?: string;

    @ImportProperty()
    SiteCity?: string;

    @ImportProperty()
    SiteCounty?: string;

    @ImportProperty()
    SiteState?: string;

    @ImportProperty()
    SiteCountry?: string;

    @ImportProperty()
    SiteFromNo?: string;

    @ImportProperty()
    SiteFromName?: string;

    @ImportProperty()
    SiteFromAddress?: string;

    @ImportProperty()
    SiteFromAddressGeoLong?: number;

    @ImportProperty()
    SiteFromAddressGeoLat?: number;

    @ImportProperty()
    SiteFromPhone?: string;

    @ImportProperty()
    SiteFromEmail?: string;

    @ImportProperty()
    SiteFromRegion?: string;

    @ImportProperty()
    SiteFromStreet?: string;

    @ImportProperty()
    SiteFromStreetNo?: string;

    @ImportProperty()
    SiteFromPostcode?: string;

    @ImportProperty()
    SiteFromCity?: string;

    @ImportProperty()
    SiteFromCounty?: string;

    @ImportProperty()
    SiteFromState?: string;

    @ImportProperty()
    SiteFromCountry?: string;

    @ImportProperty()
    BillNo?: string;

    @ImportProperty()
    BillName?: string;

    @ImportProperty()
    BillAddress?: string;

    @ImportProperty()
    BillAddressGeoLong?: number;

    @ImportProperty()
    BillAddressGeoLat?: number;

    @ImportProperty()
    BillPhone?: string;

    @ImportProperty()
    BillEmail?: string;

    @ImportProperty()
    BillRegion?: string;

    @ImportProperty()
    Importance?: number;

    @ImportProperty()
    CreationDateTime?: Date;

    @ImportProperty()
    CustomerReference?: string;

    @ImportProperty()
    Language?: string;

    @ImportProperty()
    Responsible?: string;

    @ImportProperty()
    Creator?: string;

    @ImportProperty()
    FreeText1?: string;

    @ImportProperty()
    FreeText2?: string;

    @ImportProperty()
    FreeText3?: string;

    @ImportProperty()
    FreeText4?: string;

    @ImportProperty()
    FreeText5?: string;

    @ImportProperty()
    FreeText6?: string;

    @ImportProperty()
    FreeText7?: string;

    @ImportProperty()
    FreeText8?: string;

    @ImportProperty()
    FreeText9?: string;

    @ImportProperty()
    FreeText10?: string;

    @ImportProperty()
    FreeText11?: string;

    @ImportProperty()
    FreeText12?: string;

    @ImportProperty()
    FreeText13?: string;

    @ImportProperty()
    FreeText14?: string;

    @ImportProperty()
    FreeText15?: string;

    @ImportProperty()
    FreeText16?: string;

    @ImportProperty()
    FreeText17?: string;

    @ImportProperty()
    FreeText18?: string;

    @ImportProperty()
    FreeText19?: string;

    @ImportProperty()
    FreeText20?: string;

    @ImportProperty()
    FreeDecimal1?: number;

    @ImportProperty()
    FreeDecimal2?: number;

    @ImportProperty()
    FreeDecimal3?: number;

    @ImportProperty()
    FreeDecimal4?: number;

    @ImportProperty()
    FreeDecimal5?: number;

    @ImportProperty()
    FreeDate1?: Date;

    @ImportProperty()
    FreeDate2?: Date;

    @ImportProperty()
    FreeDate3?: Date;

    @ImportProperty()
    FreeDate4?: Date;

    @ImportProperty()
    FreeDate5?: Date;

    @ImportProperty()
    FreeBit1?: boolean;

    @ImportProperty()
    FreeBit2?: boolean;

    @ImportProperty()
    FreeBit3?: boolean;

    @ImportProperty()
    FreeBit4?: boolean;

    @ImportProperty()
    FreeBit5?: boolean;

    @ImportProperty()
    EnableManualSelection?: boolean;

    @ImportProperty()
    AvailableInGantt?: boolean;

    @ImportProperty()
    StartDate?: Date;

    @ImportProperty()
    EndDate?: Date;

    @ImportProperty()
    AllowDependencies?: boolean = true;

    @ImportProperty()
    Note?: string;

    @ImportProperty()
    OverRuleGanttPlanning?: boolean;

    @ImportProperty()
    ReadOnly?: boolean;

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