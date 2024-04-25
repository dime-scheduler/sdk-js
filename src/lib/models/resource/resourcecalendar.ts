
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class ResourceCalendar extends ImportModel implements IImportModel {

    @ImportProperty("ResourceCalendarCode")
    code?: string;

    @ImportProperty("ResourceNo")
    resourceNo?: string;

    @ImportProperty("CalendarCode")
    calendarCode?: string;

    @ImportProperty("StartDate")
    startDate?: string;

    @ImportProperty("EndDate")
    endDate?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertResourceCalendar");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteResourceCalendar");
        }
    }
}