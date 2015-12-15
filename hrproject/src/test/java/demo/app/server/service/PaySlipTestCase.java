package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.PaySlipRepository;
import demo.app.shared.payroll.PaySlip;
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
public class PaySlipTestCase {

    @Autowired
    private PaySlipRepository<PaySlip> payslipRepository;

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
            corecontacts.setAge(116);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("74n4Zei79gPeojCjfBndY083ydbTOFBjSdGFsWW8lMnEaqcvav");
            corecontacts.setFirstName("dsdU6oCdyUOh0rystZC82LFfQHV1NBdqgdSh7qQQDJXEwiAn8P");
            Gender gender = new Gender();
            gender.setGender("SIWcGQ5Mno5pz2YZMBNLV6Jn9LtnXF9owrWG8Bpc7lYsSi5sUw");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("6l");
            language.setAlpha3("fhY");
            language.setAlpha4("Oj24");
            language.setAlpha4parentid(6);
            language.setLanguage("DTRo2CB8YOUi6EM1FvPeCleYp7e6eZSbr8IHjslXboChsjWJGe");
            language.setLanguageDescription("4WIILFE6DR7stsmPDsVOTKUFrs3gLndTR6tj6LOs3GPvNVcdpM");
            language.setLanguageIcon("xg9jpS23MwvF2Y6ZtKAfvN2Nv0xQSG1LEf7TES8xweBEhlgWpm");
            language.setLanguageType("j5aJ4wcERT7Aa8eAZp8N8VFVdXq8vxLq");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("3xkHOFPUBbhMBbR2nUZqzmIpjC3hRjc2JFeFQ2sUXpGwOb96tz");
            timezone.setCountry("snaR8pljgAnjVqHTtijeOT2NcUuyUPWzH4EL7FyoPYYBcD6gC8");
            timezone.setGmtLabel("VQzpDXnhZbuD6w7cJX5FYUsihQ9HjmC5VV8DyB95GoQ8ddQuVq");
            timezone.setTimeZoneLabel("aSzaUNl9bhK0YFAgdLS3OmqcOD0JnAr3oBiI2XSp59b8fPlQ8W");
            timezone.setUtcdifference(6);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("zGP2tAWzRab7Sy921o5EmZlHe8pKqaYQpdQ36LMYGBV9NH8LMk");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(66);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("bd7TksCltKMjOG7hPZzPBlWcR8MBBcfHdyPueJFcXiY9F58VVz");
            corecontacts.setFirstName("RVUqni7zKmGC72E96n08bUUupX7jmetM7E9xWNqj7M7cq8QfhQ");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("AyCGT5szydk91of3LjRcthl3LGuFxtfQZbNrakyaosJSvfByQA");
            corecontacts.setMiddleName("R9ZSrGBsZFrU3qtyOadBs69rLz6iPxNquB25IwS2PputBkwgF6");
            corecontacts.setNativeFirstName("Dab6ZW5QIT0T1V5P2Eh80nSYDb64lE6nNwLBk5jkiLYnKuns6h");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("bUNAnX4NGEmzzfhN9VARb5SuPl5zugGrIiK4I5Agbu9RASzr3p");
            corecontacts.setNativeMiddleName("C2bvsanZtsUSB4YvuP0bjVfwbgwHpyxMqunWHOrwAB0cVvcwPZ");
            corecontacts.setNativeTitle("HUCplrFacqZKeAGdPvi3mQRSrjjggBxLvvIzvKvBPPRyURqyPJ");
            corecontacts.setPhoneNumber("aOGREllXVmwLNNDo1AEj");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("umoJ10BAjTenrjGRynmf02SRiZSvzTlGel6gABPOGlGFAcYD8j");
            departmenttype.setDeptTypeHelp("zENkfC4Bq3OghJl7W24Vgx96E3oWoZdeUxfrJKaiyg5g9eodkI");
            departmenttype.setDeptTypeIcon("rvM");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("pRwBR4dwLAfkxCnllrnyJeCgrUPRirGGiwZu9nNxfPqSAg2Vbw");
            designationtype.setDesignatnTypeHelp("gHT7jQu2ImfWNBqriHYHtVErVI0rkxiAYMhflY5xdqHcDI4kMt");
            designationtype.setDesignatnTypeIcon("Qdh");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("WvauseRmmILX7r8qbHlCR8KzTg5KJDBuh2ISSlRXs6wPDduHng");
            jobtype.setJobHelp("bpIpgoDIGy7e5o2IFaTGz59HcpreBkkqUpQRyQ3mlQaYHBfPH3");
            jobtype.setJobIcon("jb7");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("ZarlAafNbVRhH9H5tmChHrupPLsupU8BBWLbUJOOy2OaJkWKRW");
            visa.setVisaHelp("8uJxw8PEQf7cCWDA1hI0GBayuEHYOVd7Nu7nNiv2QZTTSSIHUd");
            visa.setVisaIcon("pyd");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("CjLoMnUr8K2TtHzGm7E7G9GmiC7xhqZUp1PXDyO32zEVOKy6IL");
            empinformation.setReportingOfficer("nyQYdoJaGd8xI3ADbIKb2dl25DqSPFAvltmaqkPdxhMoJ4LduQ");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            PaySlip payslip = new PaySlip();
            payslip.setBasic(12.34);
            payslip.setConvenceAllowance(12.34);
            payslip.setEducationalAllowance(12.34);
            payslip.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey());
            payslip.setHra(12.34);
            payslip.setLop(12.34);
            payslip.setMedicalAllowance(12.34);
            payslip.setMonth(7);
            payslip.setSpecailAllowance(12.34);
            payslip.setTakeHome(12.34);
            payslip.setTax(12.34);
            payslip.setYear(8);
            payslip.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            payslip.setEntityValidator(entityValidator);
            payslip.isValid();
            payslipRepository.save(payslip);
            map.put("PaySlipPrimaryKey", payslip._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("PaySlipPrimaryKey"));
            PaySlip payslip = payslipRepository.findById((java.lang.String) map.get("PaySlipPrimaryKey"));
            payslip.setBasic(12.34);
            payslip.setConvenceAllowance(12.34);
            payslip.setEducationalAllowance(12.34);
            payslip.setHra(12.34);
            payslip.setLop(12.34);
            payslip.setMedicalAllowance(12.34);
            payslip.setMonth(7);
            payslip.setSpecailAllowance(12.34);
            payslip.setTakeHome(12.34);
            payslip.setTax(12.34);
            payslip.setVersionId(1);
            payslip.setYear(2);
            payslip.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            payslipRepository.update(payslip);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<PaySlip> listofempId = payslipRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("PaySlipPrimaryKey"));
            payslipRepository.findById((java.lang.String) map.get("PaySlipPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("PaySlipPrimaryKey"));
            payslipRepository.delete((java.lang.String) map.get("PaySlipPrimaryKey")); /* Deleting refrenced data */
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
