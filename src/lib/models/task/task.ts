
import CrudType from "../base/action";
import DeleteProperty from "../base/deleteproperty";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";
import Importance from "../constants/importance";

export default class Task extends ImportModel implements IImportModel {

    @ImportProperty("SourceApp")
    @DeleteProperty()
    sourceApp?: string;

    @ImportProperty("SourceType")
    @DeleteProperty()
    sourceType?: string;

    @ImportProperty("JobNo")
    @DeleteProperty()
    jobNo?: string;

    @ImportProperty("TaskNo")
    @DeleteProperty()
    taskNo?: string;

    @ImportProperty("TaskType")
    taskType?: number;

    @ImportProperty("ShortDescription")
    shortDescription?: string;

    @ImportProperty("Description")
    description?: string;

    @ImportProperty("Name")
    name?: string;

    @ImportProperty("Type")
    type?: string;

    @ImportProperty("Category")
    category?: string;

    @ImportProperty("TimeMarker")
    timeMarker?: string;

    @ImportProperty("Pin")
    pin?: string;

    @ImportProperty("ServiceNo")
    serviceNo?: string;

    @ImportProperty("ServiceGroup")
    serviceGroup?: string;

    @ImportProperty("ServiceClass")
    serviceClass?: string;

    @ImportProperty("ServiceSerialNo")
    serviceSerialNo?: string;

    @ImportProperty("ServiceName")
    serviceName?: string;

    @ImportProperty("IRISFault")
    irisFault?: string;

    @ImportProperty("IRISSymptom")
    irisSymptom?: string;

    @ImportProperty("IRISArea")
    irisArea?: string;

    @ImportProperty("IRISReason")
    irisReason?: string;

    @ImportProperty("IRISResolution")
    irisResolution?: string;

    @ImportProperty("Skill1")
    skill1?: string;

    @ImportProperty("Skill2")
    skill2?: string;

    @ImportProperty("Skill3")
    skill3?: string;

    @ImportProperty("ContractNo")
    contractNo?: string;

    @ImportProperty("ContractType")
    contractType?: string;

    @ImportProperty("ContractDescription")
    contractDescription?: string;

    @ImportProperty("ContractStartDate")
    contractStartDate?: string | null;

    @ImportProperty("ContractEndDate")
    contractEndDate?: string | null;

    @ImportProperty("PartsWarrantyStartDate")
    partsWarrantyStartDate?: string | null;

    @ImportProperty("PartsWarrantyEndDate")
    partsWarrantyEndDate?: string | null;

    @ImportProperty("LaborWarrantyStartDate")
    laborWarrantyStartDate?: string | null;

    @ImportProperty("LaborWarrantyEndDate")
    laborWarrantyEndDate?: string | null;

    @ImportProperty("Importance")
    importance?: Importance | number;

    @ImportProperty("Status")
    status?: string;

    @ImportProperty("ExpectedResponseDateTime")
    expectedResponseDateTime?: string | null;

    @ImportProperty("ActualResponseDateTime")
    actualResponseDateTime?: string | null;

    @ImportProperty("RequestedStartDate")
    requestedStartDate?: string | null;

    @ImportProperty("RequestedEndDate")
    requestedEndDate?: string | null;

    @ImportProperty("RequestedStartTime")
    requestedStartTime?: string | null;

    @ImportProperty("RequestedEndTime")
    requestedEndTime?: string | null;

    @ImportProperty("ConfirmedStartDate")
    confirmedStartDate?: string | null;

    @ImportProperty("ConfirmedEndDate")
    confirmedEndDate?: string | null;

    @ImportProperty("ActualStartDate")
    actualStartDate?: string | null;

    @ImportProperty("ActualEndDate")
    actualEndDate?: string | null;

    @ImportProperty("LocationDescription")
    locationDescription?: string;

    @ImportProperty("Duration")
    duration?: string | null;

    @ImportProperty("DurationInSeconds")
    durationInSeconds?: number;

    @ImportProperty("Subject")
    subject?: string;

    @ImportProperty("Body")
    body?: string;

    @ImportProperty("InfiniteTask")
    infiniteTask?: boolean;

    @ImportProperty("TaskOpenAsOf")
    taskOpenAsOf?: string | null;

    @ImportProperty("TaskOpenTill")
    taskOpenTill?: string | null;

    @ImportProperty("RequiredTotalDuration")
    requiredTotalDuration?: string | null;

    @ImportProperty("RequiredNoResources")
    requiredNoResources?: number;

    @ImportProperty("AppointmentEarliestAllowed")
    appointmentEarliestAllowed?: string | null;

    @ImportProperty("AppointmentLatestAllowed")
    appointmentLatestAllowed?: string | null;

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

    @ImportProperty("CertificateNo")
    certificateNo?: string;

    @ImportProperty("RequiredTotalDurationInSeconds")
    requiredTotalDurationInSeconds?: number;

    @ImportProperty("DoNotCountAppointmentResource")
    doNotCountAppointmentResource?: boolean;

    @ImportProperty("IsComplete")
    isComplete?: boolean;

    @ImportProperty("PlanningUOM")
    planningUOM?: string;

    @ImportProperty("PlanningUOMConversion")
    planningUOMConversion?: number;

    @ImportProperty("PlanningQty")
    planningQty?: number;

    @ImportProperty("UseFixPlanningQty")
    useFixPlanningQty?: boolean;

    @ImportProperty("RoundToUOM")
    roundToUOM?: boolean;

    @ImportProperty("AppointmentTemplate")
    appointmentTemplate?: string;

    @ImportProperty("BulkPlanningQty")
    bulkPlanningQty?: number;

    @ImportProperty("StartDate")
    startDate?: string | null;

    @ImportProperty("EndDate")
    endDate?: string | null;

    @ImportProperty("PercentDone")
    percentDone?: number;

    @ImportProperty("SchedulingMode")
    schedulingMode?: number;

    @ImportProperty("BaseLineStartDate")
    baseLineStartDate?: string | null;

    @ImportProperty("BaseLineEndDate")
    baseLineEndDate?: string | null;

    @ImportProperty("BaseLinePercentDone")
    baseLinePercentDone?: number;

    @ImportProperty("DeadLine")
    deadLine?: string | null;

    @ImportProperty("Index")
    index?: number;

    @ImportProperty("ConstraintType")
    constraintType?: number;

    @ImportProperty("ConstraintDatetime")
    constraintDatetime?: string | null;

    @ImportProperty("ParentTaskNo")
    parentTaskNo?: string;

    @ImportProperty("CalendarCode")
    calendarCode?: string;

    @ImportProperty("PredecessorTaskNo")
    predecessorTaskNo?: string;

    @ImportProperty("PredecessorLag")
    predecessorLag?: number;

    @ImportProperty("ManuallyScheduled")
    manuallyScheduled?: boolean;

    @ImportProperty("Note")
    note?: string;

    @ImportProperty("OverRuleGanttPlanning")
    overRuleGanttPlanning?: boolean;

    @ImportProperty("IgnoreCalendars")
    ignoreCalendars?: boolean;

    @ImportProperty("ContainerName")
    containerName?: string;

    @ImportProperty("ContainerIndex")
    containerIndex?: number;

    @ImportProperty("CheckAppointments")
    checkAppointments?: boolean;

    @ImportProperty("SentFromBackOffice")
    sentFromBackOffice?: boolean;

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