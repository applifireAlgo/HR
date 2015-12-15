package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.CostToCompanyRepository;
import demo.app.shared.payroll.CostToCompany;
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
public class CostToCompanyTestCase {

    @Autowired
    private CostToCompanyRepository<CostToCompany> costtocompanyRepository;

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
            corecontacts.setAge(32);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("5wBJkERXCtY2apE3uck7SKXqKDoLmPACWdYDTlsjQZeo5YnyII");
            corecontacts.setFirstName("7ysA5NtAce7rLhF2itfhEKr4XhyT8qomngwcZDkEbGRAY9CLB3");
            Gender gender = new Gender();
            gender.setGender("9bHatPBJFi5bm7RDcFWFRdHzqcIJgN26IeGeI5M1KuwBvO1pGv");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("el");
            language.setAlpha3("ghz");
            language.setAlpha4("xLgt");
            language.setAlpha4parentid(6);
            language.setLanguage("wtpFeu0pJPHKYNEBlSGS4dtBAncEXfP6atQ1n3uMb2z5FRdYfO");
            language.setLanguageDescription("LKxUgcovv1dE1UuMtKkI8bCjUDsnBWitirD9gkx2056nkA0BOt");
            language.setLanguageIcon("LjZn7ZcDShbkg51iIwj1OqZl0AVhcO13traSDJ9XNSAkPE4dBB");
            language.setLanguageType("O7OFoEXGIQnp5JgKW6vHXcdq9yZfEhs1");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("7GIjqyAT17ZZd9QUUTToiRQDvXwJszArdgv8KnbVAyOFAX5KPm");
            timezone.setCountry("MeK1usZh7pn5OQr6d8upuWHwHIbDJr8r4f7mlCXHa5QWECghqb");
            timezone.setGmtLabel("gsoVFOTtnZlCdzP1nwNPs6wKCBxpG6KR17Q6Q4KJQAn1uH5Cf2");
            timezone.setTimeZoneLabel("lNpahOLjAZjtDoAk3DZfhlq3irMyKtCZysbpLQmW8MkGpDxkLK");
            timezone.setUtcdifference(3);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("2i2SGU2iViwpBgbQVru6e2VS6PqqUQcq3PNhr8WDpVzOs1Edcr");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(103);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("IMqZyCTVEGKnK9CRGWKrDxiGEAQEj7DV6ELhD2ocQhuESZRl6I");
            corecontacts.setFirstName("nML71gEowenw4n8mpPWLmi8FBL3A8oo01jCvVRVWXUI6JrYzhs");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("YrlYhQt7rRIz26rT6ZQITq21n0TURmtmuBpbe1DtvyocOEwCNc");
            corecontacts.setMiddleName("YAdJZjPtFdUHbtSem0kHm4civ6nxc7xpGPHnAOccQzornmIzlo");
            corecontacts.setNativeFirstName("qUruDkL34dZLIAhbO7LjZsVGlPxJSQD2F8q6KhfAb9XLwhDJc4");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("Dibmtxda62ACh36SuRKi4n1d5n2XU7M1hMP3yuvaLNRuTC6gQt");
            corecontacts.setNativeMiddleName("P78settXBLeFgKXRpyns4NwgWsE1LdIFEhvRYcmgZu32OEaLbs");
            corecontacts.setNativeTitle("aQZo8nDe1pqTxDC08Tco0SvnZWNYgTNRm8sTMg5GAz7RbZbqAI");
            corecontacts.setPhoneNumber("DuIJ6l9vbblpvrpM53LN");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("3A9HU2FbQu2s1vrwqdIoFFoEJ4hQkUmsdgqetCrGf4U3bgGTDM");
            departmenttype.setDeptTypeHelp("3R4AULyVwzfxfxoIHdP0HGzcQsjv3ioBQoO8d5mk61QIWoYLG6");
            departmenttype.setDeptTypeIcon("gB0");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("2iFsCUqkMj7AXFcqKJi2GTvCPn19QtRAswLHPYU1qAKcYjgLeE");
            designationtype.setDesignatnTypeHelp("D1uX8Lc3HwOjhv6EcAsvKoy59r0lCIZ13MyT03kTsTRLqoIipQ");
            designationtype.setDesignatnTypeIcon("aGI");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("176q7mxKDF5GzfWR0eMBLAJYBf9Hz7qBbGnq8HFeX9LJoi4JhF");
            jobtype.setJobHelp("YvprpTMDAk9mSRV6tz7oIghOthn2hY9QeygXeMGIl5LSi98fCF");
            jobtype.setJobIcon("8Jg");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("wKELSPENOPEVS2317RVre0svmVhXnGvudlXHcPHbIS17DjFtga");
            visa.setVisaHelp("84bgdLRXO3ZeAPaSXUuWQN01LUDCMjoiWPz2BskxJ0uvGE5U0L");
            visa.setVisaIcon("xe8");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("w1sagp9om6HO3usT3KbZ1QLBjMfFvcY4JC9HeL1iWBoB5JRAq2");
            empinformation.setReportingOfficer("mhJgICS0Km54suJkFCMwhxwszJr7V5xwmPI5WOxR9uyeTLKps1");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            CostToCompany costtocompany = new CostToCompany();
            costtocompany.setBasic(12.34);
            costtocompany.setConvenceAllowance(12.34);
            costtocompany.setEducationalAllowance(12.34);
            costtocompany.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey());
            costtocompany.setHra(12.34);
            costtocompany.setMedicalAllowance(12.34);
            costtocompany.setPerk(12.34);
            costtocompany.setSpecailAllowance(12.34);
            costtocompany.setTakeHome(12.34);
            costtocompany.setTotalCTC(12.34);
            costtocompany.setYear(6);
            costtocompany.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            costtocompany.setEntityValidator(entityValidator);
            costtocompany.isValid();
            costtocompanyRepository.save(costtocompany);
            map.put("CostToCompanyPrimaryKey", costtocompany._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("CostToCompanyPrimaryKey"));
            CostToCompany costtocompany = costtocompanyRepository.findById((java.lang.String) map.get("CostToCompanyPrimaryKey"));
            costtocompany.setBasic(12.34);
            costtocompany.setConvenceAllowance(12.34);
            costtocompany.setEducationalAllowance(12.34);
            costtocompany.setHra(12.34);
            costtocompany.setMedicalAllowance(12.34);
            costtocompany.setPerk(12.34);
            costtocompany.setSpecailAllowance(12.34);
            costtocompany.setTakeHome(12.34);
            costtocompany.setTotalCTC(12.34);
            costtocompany.setVersionId(1);
            costtocompany.setYear(10);
            costtocompany.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            costtocompanyRepository.update(costtocompany);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<CostToCompany> listofempId = costtocompanyRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("CostToCompanyPrimaryKey"));
            costtocompanyRepository.findById((java.lang.String) map.get("CostToCompanyPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CostToCompanyPrimaryKey"));
            costtocompanyRepository.delete((java.lang.String) map.get("CostToCompanyPrimaryKey")); /* Deleting refrenced data */
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
