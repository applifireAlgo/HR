package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.AttendenceDetailsRepository;
import demo.app.shared.attendance.AttendenceDetails;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import demo.app.shared.employee.EmpInformation;
import demo.app.server.repository.EmpInformationRepository;
import demo.app.shared.contacts.CoreContacts;
import demo.app.server.repository.CoreContactsRepository;
import demo.app.shared.contacts.Gender;
import demo.app.server.repository.GenderRepository;
import demo.app.shared.location.Language;
import demo.app.server.repository.LanguageRepository;
import demo.app.shared.location.Timezone;
import demo.app.server.repository.TimezoneRepository;
import demo.app.shared.contacts.Title;
import demo.app.server.repository.TitleRepository;
import demo.app.shared.employee.DepartmentType;
import demo.app.server.repository.DepartmentTypeRepository;
import demo.app.shared.employee.DesignationType;
import demo.app.server.repository.DesignationTypeRepository;
import demo.app.shared.employee.JobType;
import demo.app.server.repository.JobTypeRepository;
import demo.app.shared.employee.Visa;
import demo.app.server.repository.VisaRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AttendenceDetailsTestCase {

    @Autowired
    private AttendenceDetailsRepository<AttendenceDetails> attendencedetailsRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            EmpInformation empinformation = new EmpInformation();
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(10);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("mR2HL4FGSa6YRltPZD1UzQgXFpYVB8DY5lUwDhJzAQfWHxVOx3");
            corecontacts.setFirstName("EF5xv9J9DEckUN2Td6QFTdVkwmfe5bxTVEr6ahUPDVHwvecBKj");
            Gender gender = new Gender();
            gender.setGender("zfsdJfmGOXmr31i8hbV5MlDDPZTSeFTXvsbmzpCWfGWFobyeUy");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("eS");
            language.setAlpha3("EMe");
            language.setAlpha4("xpy2");
            language.setAlpha4parentid(9);
            language.setLanguage("wKFfkhMJmOIj4b1h6gXAy16U7DO4251amRmDdCah6dIpcYCXaP");
            language.setLanguageDescription("Ecrv8eXdMnVMmbDcdq9IHyXbOgbdfvBGtCnJEfkn4qbmMtEUAb");
            language.setLanguageIcon("H2jxZLlgIxUTGAvuDgbKIgd4qaUI9tm6EvvCBdTmrUUacihcQM");
            language.setLanguageType("oQN3bhkYpfhyr5v5DHQMFGMgNrfEFDH2");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("J9dZM5UK2yVv8FfQjUYznpqm77nu09ZS2n6KYViKbl4pLm9h0I");
            timezone.setCountry("n1TTIkcRudCdv8HSZZxtJ9eKD7rJUMWRIfCuOM1XEnu0rvln6p");
            timezone.setGmtLabel("gVXhq82L8oKAIrWS0m4gAOXW90yLvLYaNP9lp89jbIjPLfzD4t");
            timezone.setTimeZoneLabel("VmHzOqkK3KUxNidzFw45E3CROHHHLJw8qn9OqgqQDwoDNCzpfo");
            timezone.setUtcdifference(5);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("qhLAd2xZgbctKQLsHB6p5TR9wkSkKgKIatUDQzsctecAxr3PaH");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(44);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("bMhIVqiVhtraPinn4DrU6vIo3wpqRxrKMf7WkIKWjptBEergXd");
            corecontacts.setFirstName("g4r5mzeUs4f4hgxrFjXMskbd2ztJawxnfCjZQBygGTSw4JBSJx");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("s9DKR71X1d4lrnhQXnChe2CaMuPnoRcyWmTJYqfGMJs3QGJJZ6");
            corecontacts.setMiddleName("gk4KH7hM9l8DBt6OObk7O8ea5pbf24M3H9OXas1upgRDvifA2H");
            corecontacts.setNativeFirstName("lH3VQrNnOA5iOlNntl8uTkHeYLuMjsYQ9bZbsTGFMkkvIghuhN");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("WNo7MRW5GNZRTpmxCzIwnMVPVSO8aZoAMhwdatal7Hy3AvKfhx");
            corecontacts.setNativeMiddleName("C6SV9LhEu5dBVVPR7uNbgsXFsPKxIZtOyzqTZYETP5QucFxWYw");
            corecontacts.setNativeTitle("4V8GoHPiVLQvlqtk44agihuSgCWur0fUpo2xu8YxkC8vYJmCbY");
            corecontacts.setPhoneNumber("QPP2OvzfiQ2BFSuRnOvT");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("WrPKdGhSscWmxvmRtiXh9bf9R45SfQlrh05TcuVEvczQgfSsR4");
            departmenttype.setDeptTypeHelp("1zp21mz9CL8raAB5bdvYxCh0VmJanm6DAnUf2VfEFfNicVrMpp");
            departmenttype.setDeptTypeIcon("6QQ");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("5fiLt6nhAEfoH9Xy3LmKcl7wI6Gs3eEFqDPxzSZEfwFuBNV7q9");
            designationtype.setDesignatnTypeHelp("JXNYPE5sJCrBC4Mjvn7yWyUX0RZ3b8QYXNENrsv4lbFknZN2aA");
            designationtype.setDesignatnTypeIcon("0gD");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("a2hERvhY1QbKcRWbbODRQNrhWl6j6wGXzczbRl8Mik0ZOQ5Nvt");
            jobtype.setJobHelp("PMVm8kIbJKtLfQsnzwIdIcDHmxhZI7GEGYQNG0P2pb03n4lgep");
            jobtype.setJobIcon("l7R");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("iYbGbsQFlzczvM8k95kiP063ekyU7eTlehJXmqackNrxIUEnyv");
            visa.setVisaHelp("IhOnWaC9j6A1dBzjECBjbM83jPCHMKLQ5IWmjVYLFCPVXteHHP");
            visa.setVisaIcon("39u");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("V99ZUaUXNesRXUungniauraEWLmiU4oieFPIqBrL1DRB67CEOx");
            empinformation.setReportingOfficer("lUZGmZFf2o2D8owAvtgiYKMfM4rdmpy02tsKPMRDLn0ksDfq4B");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            AttendenceDetails attendencedetails = new AttendenceDetails();
            attendencedetails.setAbsent(true);
            attendencedetails.setAttendenceDate(new java.sql.Date(123456789));
            attendencedetails.setCasualLeave(true);
            attendencedetails.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey());
            attendencedetails.setInTime(new java.sql.Timestamp(123456789));
            attendencedetails.setMaternityLeave(true);
            attendencedetails.setMonth(5);
            attendencedetails.setOutTime(new java.sql.Timestamp(123456789));
            attendencedetails.setPresent(true);
            attendencedetails.setPrivilege(true);
            attendencedetails.setSickLeave(true);
            attendencedetails.setYear(4);
            attendencedetails.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            attendencedetails.setEntityValidator(entityValidator);
            attendencedetails.isValid();
            attendencedetailsRepository.save(attendencedetails);
            map.put("AttendenceDetailsPrimaryKey", attendencedetails._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private EmpInformationRepository<EmpInformation> empinformationRepository;

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private DepartmentTypeRepository<DepartmentType> departmenttypeRepository;

    @Autowired
    private DesignationTypeRepository<DesignationType> designationtypeRepository;

    @Autowired
    private JobTypeRepository<JobType> jobtypeRepository;

    @Autowired
    private VisaRepository<Visa> visaRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("AttendenceDetailsPrimaryKey"));
            AttendenceDetails attendencedetails = attendencedetailsRepository.findById((java.lang.String) map.get("AttendenceDetailsPrimaryKey"));
            attendencedetails.setAttendenceDate(new java.sql.Date(123456789));
            attendencedetails.setInTime(new java.sql.Timestamp(123456789));
            attendencedetails.setMonth(2);
            attendencedetails.setOutTime(new java.sql.Timestamp(123456789));
            attendencedetails.setVersionId(1);
            attendencedetails.setYear(1);
            attendencedetails.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            attendencedetailsRepository.update(attendencedetails);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AttendenceDetailsPrimaryKey"));
            attendencedetailsRepository.findById((java.lang.String) map.get("AttendenceDetailsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<AttendenceDetails> listofempId = attendencedetailsRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
            if (listofempId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("AttendenceDetailsPrimaryKey"));
            attendencedetailsRepository.delete((java.lang.String) map.get("AttendenceDetailsPrimaryKey")); /* Deleting refrenced data */
            empinformationRepository.delete((java.lang.String) map.get("EmpInformationPrimaryKey")); /* Deleting refrenced data */
            visaRepository.delete((java.lang.String) map.get("VisaPrimaryKey")); /* Deleting refrenced data */
            jobtypeRepository.delete((java.lang.String) map.get("JobTypePrimaryKey")); /* Deleting refrenced data */
            designationtypeRepository.delete((java.lang.String) map.get("DesignationTypePrimaryKey")); /* Deleting refrenced data */
            departmenttypeRepository.delete((java.lang.String) map.get("DepartmentTypePrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
