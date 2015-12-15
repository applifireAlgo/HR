package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.SalaryStructureFinancialWiseRepository;
import demo.app.shared.payroll.SalaryStructureFinancialWise;
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
public class SalaryStructureFinancialWiseTestCase {

    @Autowired
    private SalaryStructureFinancialWiseRepository<SalaryStructureFinancialWise> salarystructurefinancialwiseRepository;

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
            corecontacts.setAge(125);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("N1T9o6JSV8ioRhvM3ZV51txzttwzSaIBH00POqsuLbHUr7Yct9");
            corecontacts.setFirstName("SdxQTxECEtq1dwtoaoarY3eSfzEwQimol9Ze59tO2wRKPPhRlf");
            Gender gender = new Gender();
            gender.setGender("0IzCh1KvL9XWov89IDUmRXS6BXMKLJvcgp9xyW60r9vEf3RgoU");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("pa");
            language.setAlpha3("dRu");
            language.setAlpha4("IUPK");
            language.setAlpha4parentid(5);
            language.setLanguage("sZ15m9XltDaNF9BlqmGiQKnJMlGC7PN0txJMhsrtC7pywVpwK0");
            language.setLanguageDescription("1BCrCLrkom7ggzD2ICUthQ8mCoFs2ckomXZFbbSUDK7Pm9VSXR");
            language.setLanguageIcon("wlzmksbgem2lNvhpcIIB9JIRKMC6NjtsjiVD5AJQZBhJOI3Yr4");
            language.setLanguageType("dXXcNIAhgt2Bgfe78jy07hwGBezrjRSB");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("T7TSYOJ3zAxaNXBZ7Ev6Cof4Jqf5DEEEf3SbUPIJZkeHf8NZnH");
            timezone.setCountry("YVkyFW5LWxSvzFFmgkj5iwnlPBua7Ei9qrhNwG87S6AagufTy6");
            timezone.setGmtLabel("lphjadEmwpTzBN2p56mRsgjQHmqRKisW1RrKDCV9Of3kjthSTZ");
            timezone.setTimeZoneLabel("zPYbeUTsG0MaHuTtfdJ97QH807hJ7Q4Maz5BMAhI6pnukEjKWS");
            timezone.setUtcdifference(6);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("uZ6LTeuOpKLDP0AEu4yEBs4I76L7qcxuHNKDjS5z4wSQ8tdsOH");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(116);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("T9yX1Zie9UnSqZgOqnjGVtxQBziE92i6nnk1qvaxWAW08BITGc");
            corecontacts.setFirstName("8xzJ4QFJdX9aiIpdQeUn190gnXjABAnKbNTrJ8JMliVm4GUJQZ");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("AA6ouUtsCLjZsnzdarWfu4UTs7KNaDzlMaLTPYO4Mi3tn6LOAv");
            corecontacts.setMiddleName("ggEkqExFSWUt8bxmRZyOyPInw8ayMpXmk8ocgVWWp8uXF5tot0");
            corecontacts.setNativeFirstName("GQqQ6Vf6M0uLPWdLzWIQNYs2ayD3Q845vscInFZ1FhXwcNgdPP");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("BLLiLHTP2QzOXlnCSAumYzfx0WThmndugrolTcKThsPR3CiBx2");
            corecontacts.setNativeMiddleName("nUQHPNXhGuqggicNd9OY1fIpR3hH2XFXOe8NahI8Gc8aGPM7lT");
            corecontacts.setNativeTitle("pQ4DeV5UVup28b807hlFSr0Hb43zy9SKSd96xfMAGWHhTgODLe");
            corecontacts.setPhoneNumber("tLtZ1RfffnqodgTLw1IR");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("MHEIRn49FJrqmvnWP9okQcHErhM8TrvHvA4xVYbmZOaooqdIoM");
            departmenttype.setDeptTypeHelp("quj75JcKFwiDi2cac46FSvAFY4qnSXMgtfWlXNHN7VQ6AkV4Jh");
            departmenttype.setDeptTypeIcon("mWm");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("okSr58SyPai0NVPLncmgX2846dMvPhT2qmaW5KIefmf2uT9Wta");
            designationtype.setDesignatnTypeHelp("yyU3zL9diJoXvP7fiVrfJrIZYD2dUdaRH97iFb3N96UiUPyvV7");
            designationtype.setDesignatnTypeIcon("IbO");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("WJWBYHfNhoJjG17aBLYWeArnhAXWPwq7AW9Yn55mJW7HtSsv3q");
            jobtype.setJobHelp("J2V4pMFtEC15k0R5luHqJqwzmWMsjBFGc7QLTMzY4CP7LFwyDI");
            jobtype.setJobIcon("Wj9");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("K1RQXmD7C8dnKlRx6oZ8ZSzjGcZy7I2KJJ6jnup631CipQbeXT");
            visa.setVisaHelp("JWMg8dyUQ93tV3GinXuH5gZA003qkCCkvyXjevSawyQALs8bKV");
            visa.setVisaIcon("pZY");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("duxpZG2XABXsir72FVNk52NC9dPodNtldw5BCcq3XLeGZtCwXA");
            empinformation.setReportingOfficer("fTe14QqSAeY5FIqD1UogSIMsK4FcXT2S5VUMsMXhszf8OnSp1Y");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            SalaryStructureFinancialWise salarystructurefinancialwise = new SalaryStructureFinancialWise();
            salarystructurefinancialwise.setBasic(12.34);
            salarystructurefinancialwise.setConvenceAllowance(12.34);
            salarystructurefinancialwise.setEducationalAllowance(12.34);
            salarystructurefinancialwise.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey());
            salarystructurefinancialwise.setHra(12.34);
            salarystructurefinancialwise.setMedicalAllowance(12.34);
            salarystructurefinancialwise.setNonTaxableAmount(12.34);
            salarystructurefinancialwise.setPerk(12.34);
            salarystructurefinancialwise.setSalaryDrawn(12.34);
            salarystructurefinancialwise.setSpecailAllowance(12.34);
            salarystructurefinancialwise.setTakeHome(12.34);
            salarystructurefinancialwise.setTaxableAmount(12.34);
            salarystructurefinancialwise.setTotalCTC(12.34);
            salarystructurefinancialwise.setTotalTax(12.34);
            salarystructurefinancialwise.setYear(4176);
            salarystructurefinancialwise.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            salarystructurefinancialwise.setEntityValidator(entityValidator);
            salarystructurefinancialwise.isValid();
            salarystructurefinancialwiseRepository.save(salarystructurefinancialwise);
            map.put("SalaryStructureFinancialWisePrimaryKey", salarystructurefinancialwise._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("SalaryStructureFinancialWisePrimaryKey"));
            SalaryStructureFinancialWise salarystructurefinancialwise = salarystructurefinancialwiseRepository.findById((java.lang.String) map.get("SalaryStructureFinancialWisePrimaryKey"));
            salarystructurefinancialwise.setBasic(12.34);
            salarystructurefinancialwise.setConvenceAllowance(12.34);
            salarystructurefinancialwise.setEducationalAllowance(12.34);
            salarystructurefinancialwise.setHra(12.34);
            salarystructurefinancialwise.setMedicalAllowance(12.34);
            salarystructurefinancialwise.setNonTaxableAmount(12.34);
            salarystructurefinancialwise.setPerk(12.34);
            salarystructurefinancialwise.setSalaryDrawn(12.34);
            salarystructurefinancialwise.setSpecailAllowance(12.34);
            salarystructurefinancialwise.setTakeHome(12.34);
            salarystructurefinancialwise.setTaxableAmount(12.34);
            salarystructurefinancialwise.setTotalCTC(12.34);
            salarystructurefinancialwise.setTotalTax(12.34);
            salarystructurefinancialwise.setVersionId(1);
            salarystructurefinancialwise.setYear(2261);
            salarystructurefinancialwise.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            salarystructurefinancialwiseRepository.update(salarystructurefinancialwise);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<SalaryStructureFinancialWise> listofempId = salarystructurefinancialwiseRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("SalaryStructureFinancialWisePrimaryKey"));
            salarystructurefinancialwiseRepository.findById((java.lang.String) map.get("SalaryStructureFinancialWisePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("SalaryStructureFinancialWisePrimaryKey"));
            salarystructurefinancialwiseRepository.delete((java.lang.String) map.get("SalaryStructureFinancialWisePrimaryKey")); /* Deleting refrenced data */
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
