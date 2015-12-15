package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.LeaveRequestRepository;
import demo.app.shared.attendance.LeaveRequest;
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
public class LeaveRequestTestCase {

    @Autowired
    private LeaveRequestRepository<LeaveRequest> leaverequestRepository;

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
            corecontacts.setAge(117);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("sapephLshPmfXPzzbI1VEnDfDfqb2ZLmpWCWcFyrXiitv8MIDz");
            corecontacts.setFirstName("TQzWAzCLzvnM5nt0JmIvDSp8Cm3xSKmO3pMKFTIz8OLUFFlQWq");
            Gender gender = new Gender();
            gender.setGender("gj5NJk5xDT4LPGBe9X67EyFSBTQi4H8fJREAWewqGh8ckbtyXN");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("Wz");
            language.setAlpha3("QYQ");
            language.setAlpha4("lUVT");
            language.setAlpha4parentid(1);
            language.setLanguage("0JRxGvNa24ccse2pG4DjO55hOZARtpb3Jp3l7leVoIZkpIOwkX");
            language.setLanguageDescription("jzwQWgndCs2D7Jofpk0iqQOE8XzDkhDsT4n5hAuvMxCJrqoN4Q");
            language.setLanguageIcon("NQYNhiXcuaYaY4BIwjAnsyGHuEUNB92rJjvpZywZHEi8rsXNPp");
            language.setLanguageType("FzLqRCL0LtBW5OdnwduwERxtz3IPHr1T");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("AbJKciLqvogTZ9z2Hw9aqOXOC2jGgcKWgDXPdhnlVueYH9MS3I");
            timezone.setCountry("6f7EoVs8LegxUpVaVdi83rdRxJkD1ZM4GBMijx8jdROOMDRlFI");
            timezone.setGmtLabel("8v1C812eJV1yYJWljlyB6ZRR7hNjouAVIeFzywd6ixH6MuyNlI");
            timezone.setTimeZoneLabel("8U1bhj2vmAIrWsxoRlzVGRojKvDu8UR9YKjo9GEhV9Tazkrtjd");
            timezone.setUtcdifference(8);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("pLW6zHDkvU6nK9wNyzRWZDCpCwE8BudjGmtP3NMbBKO2FLHaHB");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(7);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("iGhONBIEPZ4ezS0giFB5ivMDhXZHnCQMVfMRFp2vxtE528eYL0");
            corecontacts.setFirstName("PkOQOD0BYoVRilhzZWiFFtb9rN88mnysRVewY2vvD40W4f2N3Q");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("PiNwfvN71BzqAHnD1tnD2ixYvFHjJOZe8OMxLNrSjE5t8a0M1k");
            corecontacts.setMiddleName("I5hjlIAUkfdm4fNheMZX1JWfMuJgjUURuUPsTvZxxnIhrEcl6z");
            corecontacts.setNativeFirstName("ZQBUpZIT7HoCWeWxUxOK2xJLpw871BM0IdCGDM1BDDFp0EAw0A");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("1rV7jfvPhZpT65TmkCGUnq5BEoniiIRH2uOm2ZPOo3E4nTevLe");
            corecontacts.setNativeMiddleName("PkqnS5bAdaDQMiMtCxgQNeoZWU4JKMYX3eFMtErU8yDzFRSMnW");
            corecontacts.setNativeTitle("kqtp9WYdUjHGgMrOD11lTvEwadASZKKMIB75sMI3Z2vepe18ds");
            corecontacts.setPhoneNumber("0umIFhseyqZprwU7pvRW");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("e2sJc3l5P47gJg6QTUtU1fy7jgKxkOMFL6IB78a30uN55bztus");
            departmenttype.setDeptTypeHelp("tzJGIXEG05kLCucFUPRFv450Fe9x8KVzsncvP2swj8xPs1A9vP");
            departmenttype.setDeptTypeIcon("aB2");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("CM3mr1qxQOOmAO1ZNHibBXVeJ6rnEz6LdQI6loLKJxg9STNGmT");
            designationtype.setDesignatnTypeHelp("YcuLU8SbnH1vF86oskHK48VJ56BsirqSO6dOpZRn9AMzq4JQQy");
            designationtype.setDesignatnTypeIcon("53w");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("7327zQ2ryMP9Gj7AHC0d3nt4VAQmMnoE9tsarmQbrUnKMFtA8r");
            jobtype.setJobHelp("W5r0UxT8sU3yWXwtjeWMsjw49tzump4zcBqrpWLbaCXTVIyXkV");
            jobtype.setJobIcon("L3r");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("M0mB5XSbJ0EydNlZ1J6hlRI8OxSxeGSEsaaz4pMwA1YlNVPxsG");
            visa.setVisaHelp("WtZVP26Zfv4zhnSmw6FPjnco1IT1ZoSMzSXXFofwIMmB5UoXkh");
            visa.setVisaIcon("NbC");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("c6IZciK197byxpgmnPxj9zOqBrLexZaudFLHfpZpXx3mZL4KBw");
            empinformation.setReportingOfficer("wuo7YSx1PrOScpTaaTjvqI5zfdtVygYGsevfW0ExAN09crJwlU");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            LeaveRequest leaverequest = new LeaveRequest();
            leaverequest.setCasualLeave(3);
            leaverequest.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey());
            leaverequest.setFromDate(new java.sql.Date(123456789));
            leaverequest.setMaternityLeave(3);
            leaverequest.setPrivilege(5);
            leaverequest.setSickLeave(2);
            leaverequest.setToDate(new java.sql.Date(123456789));
            leaverequest.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            leaverequest.setEntityValidator(entityValidator);
            leaverequest.isValid();
            leaverequestRepository.save(leaverequest);
            map.put("LeaveRequestPrimaryKey", leaverequest._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("LeaveRequestPrimaryKey"));
            LeaveRequest leaverequest = leaverequestRepository.findById((java.lang.String) map.get("LeaveRequestPrimaryKey"));
            leaverequest.setCasualLeave(10);
            leaverequest.setFromDate(new java.sql.Date(123456789));
            leaverequest.setMaternityLeave(8);
            leaverequest.setPrivilege(10);
            leaverequest.setSickLeave(1);
            leaverequest.setToDate(new java.sql.Date(123456789));
            leaverequest.setVersionId(1);
            leaverequest.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            leaverequestRepository.update(leaverequest);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<LeaveRequest> listofempId = leaverequestRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("LeaveRequestPrimaryKey"));
            leaverequestRepository.findById((java.lang.String) map.get("LeaveRequestPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("LeaveRequestPrimaryKey"));
            leaverequestRepository.delete((java.lang.String) map.get("LeaveRequestPrimaryKey")); /* Deleting refrenced data */
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
