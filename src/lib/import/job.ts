class Job {
    SourceApp: string;
    SourceType: string;
    JobNo: string;
    ShortDescription: string;
    Description: string;
    Type: string;
    Name: string;
    Category: string;
    TimeMarker: string;
    Pin: string;
    CustomerNo: string;
    CustomerName: string;
    CustomerAddress: string;
    CustomerPhone: string;
    CustomerEmail: string;
    ContactNo: string;
    ContactName: string;
    ContactAddress: string;
    ContactPhone: string;
    ContactEmail: string;
    SiteNo: string;
    SiteName: string;
    SiteAddress: string;
    SitePhone: string;
    SiteEmail: string;

    constructor() {
        this.SourceApp = "";
        this.SourceType = "";
        this.JobNo = "";
        this.ShortDescription = "";
        this.Description = "";
        this.Type = "";
        this.Name = "";
        this.Category = "";
        this.TimeMarker = "";
        this.Pin = "";
        this.CustomerNo = "";
        this.CustomerName = "";
        this.CustomerAddress = "";
        this.CustomerPhone = "";
        this.CustomerEmail = "";
        this.ContactNo = "";
        this.ContactName = "";
        this.ContactAddress = "";
        this.ContactPhone = "";
        this.ContactEmail = "";
        this.SiteNo = "";
        this.SiteName = "";
        this.SiteAddress = "";
        this.SitePhone = "";
        this.SiteEmail = "";
    }

    toImportRequest(append = true) {
        return {
            "StoredProcedureName": "mboc_upsertJob",
            "ParameterNames": ["SourceApp", "SourceType", "JobNo", "ShortDescription"],
            "ParameterValues": [this.SourceApp, this.SourceType, this.JobNo, this.ShortDescription]
        }
    }
}

export default Job;