
import CrudType from "../base/action";
import DeleteProperty from "../base/deleteproperty";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class Task extends ImportModel implements IImportModel {

    @ImportProperty("")
    @DeleteProperty()
    sourceApp?: string;

    @ImportProperty("")
    @DeleteProperty()
    sourceType?: string;

    @ImportProperty("")
    @DeleteProperty()
    jobNo?: string;

    @ImportProperty("")
    @DeleteProperty()
    taskNo?: string;

    @ImportProperty("")
    taskType?: number;

    @ImportProperty("")
    shortDescription?: string;

    @ImportProperty("")
    description?: string;

    @ImportProperty("")
    name?: string;

    @ImportProperty("")
    type?: string;

    @ImportProperty("")
    category?: string;

    @ImportProperty("")
    timeMarker?: string;

    @ImportProperty("")
    pin?: string;

    @ImportProperty("")
    serviceNo?: string;

    @ImportProperty("")
    serviceGroup?: string;

    @ImportProperty("")
    serviceClass?: string;

    @ImportProperty("")
    serviceSerialNo?: string;

    @ImportProperty("")
    serviceName?: string;

    @ImportProperty("")
    irisFault?: string;

    @ImportProperty("")
    irisSymptom?: string;

    @ImportProperty("")
    irisArea?: string;

    @ImportProperty("")
    irisReason?: string;

    @ImportProperty("")
    irisResolution?: string;

    @ImportProperty("")
    skill1?: string;

    @ImportProperty("")
    skill2?: string;

    @ImportProperty("")
    skill3?: string;

    @ImportProperty("")
    contractNo?: string;

    @ImportProperty("")
    contractType?: string;

    @ImportProperty("")
    contractDescription?: string;

    @ImportProperty("")
    contractStartDate?: string | null;

    @ImportProperty("")
    contractEndDate?: string | null;

    @ImportProperty("")
    partsWarrantyStartDate?: string | null;

    @ImportProperty("")
    partsWarrantyEndDate?: string | null;

    @ImportProperty("")
    laborWarrantyStartDate?: string | null;

    @ImportProperty("")
    laborWarrantyEndDate?: string | null;

    @ImportProperty("")
    importance?: number;

    @ImportProperty("")
    status?: string;

    @ImportProperty("")
    expectedResponseDateTime?: string | null;

    @ImportProperty("")
    actualResponseDateTime?: string | null;

    @ImportProperty("")
    requestedStartDate?: string | null;

    @ImportProperty("")
    requestedEndDate?: string | null;

    @ImportProperty("")
    requestedStartTime?: string | null;

    @ImportProperty("")
    requestedEndTime?: string | null;

    @ImportProperty("")
    confirmedStartDate?: string | null;

    @ImportProperty("")
    confirmedEndDate?: string | null;

    @ImportProperty("")
    actualStartDate?: string | null;

    @ImportProperty("")
    actualEndDate?: string | null;

    @ImportProperty("")
    locationDescription?: string;

    @ImportProperty("")
    duration?: string | null;

    @ImportProperty("")
    durationInSeconds?: number;

    @ImportProperty("")
    subject?: string;

    @ImportProperty("")
    body?: string;

    @ImportProperty("")
    infiniteTask?: boolean;

    @ImportProperty("")
    taskOpenAsOf?: string | null;

    @ImportProperty("")
    taskOpenTill?: string | null;

    @ImportProperty("")
    requiredTotalDuration?: string | null;

    @ImportProperty("")
    requiredNoResources?: number;

    @ImportProperty("")
    appointmentEarliestAllowed?: string | null;

    @ImportProperty("")
    appointmentLatestAllowed?: string | null;

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
    certificateNo?: string;

    @ImportProperty("")
    requiredTotalDurationInSeconds?: number;

    @ImportProperty("")
    doNotCountAppointmentResource?: boolean;

    @ImportProperty("")
    isComplete?: boolean;

    @ImportProperty("")
    planningUOM?: string;

    @ImportProperty("")
    planningUOMConversion?: number;

    @ImportProperty("")
    planningQty?: number;

    @ImportProperty("")
    useFixPlanningQty?: boolean;

    @ImportProperty("")
    roundToUOM?: boolean;

    @ImportProperty("")
    appointmentTemplate?: string;

    @ImportProperty("")
    bulkPlanningQty?: number;

    @ImportProperty("")
    startDate?: string | null;

    @ImportProperty("")
    endDate?: string | null;

    @ImportProperty("")
    percentDone?: number;

    @ImportProperty("")
    schedulingMode?: number;

    @ImportProperty("")
    baseLineStartDate?: string | null;

    @ImportProperty("")
    baseLineEndDate?: string | null;

    @ImportProperty("")
    baseLinePercentDone?: number;

    @ImportProperty("")
    deadLine?: string | null;

    @ImportProperty("")
    index?: number;

    @ImportProperty("")
    constraintType?: number;

    @ImportProperty("")
    constraintDatetime?: string | null;

    @ImportProperty("")
    parentTaskNo?: string;

    @ImportProperty("")
    calendarCode?: string;

    @ImportProperty("")
    predecessorTaskNo?: string;

    @ImportProperty("")
    predecessorLag?: number;

    @ImportProperty("")
    manuallyScheduled?: boolean;

    @ImportProperty("")
    note?: string;

    @ImportProperty("")
    overRuleGanttPlanning?: boolean;

    @ImportProperty("")
    ignoreCalendars?: boolean;

    @ImportProperty("")
    containerName?: string;

    @ImportProperty("")
    containerIndex?: number;

    @ImportProperty("")
    checkAppointments?: boolean;

    @ImportProperty("")
    sentFromBackOffice?: boolean;

    @ImportProperty("")
    createJob?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertTask");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteTask");
        }
    }
}