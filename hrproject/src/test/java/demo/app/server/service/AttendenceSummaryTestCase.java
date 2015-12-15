package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.AttendenceSummaryRepository;
import demo.app.shared.attendance.AttendenceSummary;
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
public class AttendenceSummaryTestCase {

    @Autowired
    private AttendenceSummaryRepository<AttendenceSummary> attendencesummaryRepository;

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
            corecontacts.setAge(4);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("vI3gEkUbBK1u4XuYxnvY7Uj6vXTe5hmakywTDZkvC92rVKWVWc");
            corecontacts.setFirstName("hfwkgjrmJ6TAxGmhcevwZZu5rNEwRAN9JcHscfes2lO4i7tMBo");
            Gender gender = new Gender();
            gender.setGender("jhGJQMGHKwLsXInqzHjMERj7uNCCpN1Z8nwIYZOwuw05w9WcpH");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("ti");
            language.setAlpha3("uMv");
            language.setAlpha4("8QvC");
            language.setAlpha4parentid(8);
            language.setLanguage("MUqm9TN4dMnYvDHVjOOrYIE7qujPtp0u7gDJ5qj18AMjtqwaz3");
            language.setLanguageDescription("G3vsaz42ij4QndYajTvb4NUL2WCHuq7tXWt1LZeO2ISchoKonI");
            language.setLanguageIcon("ptCyxXtr7HTLAckyvOlqyGmPiZZO5lXpJDuZn4sbXoq9IG3YI2");
            language.setLanguageType("h4cHiXoj0vP5wDZJ10bqHJoLPtAXTwfk");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("bNwUJiN8UiZIQpsweNHqOboi1PUaevCnUF2cEEuZrsccTkU9am");
            timezone.setCountry("vXEbs11h5bvISfU3wJddnDHqStcJLjJT4k9Cp8U5EeFwzaZrge");
            timezone.setGmtLabel("ef5rxJ0BH0zwkfUOHLIhabjGEKTnABc1q4nHrfUB7QpT1V3VyK");
            timezone.setTimeZoneLabel("Af95JWDGCIZIQawkbjFS3WJlQ8SDD6cABcYfX87SD2mmIjmNl9");
            timezone.setUtcdifference(1);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("QZ1vlyFX2D5YMgIGRoHp1mr0Vl2MuEo1JicUV4GmdNgo7mzY9P");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(0);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("XKAPn0BKNLhgNmbGfSeNCu4MoBj2ZTiLnZ9ah4QHCtIlMSmpp8");
            corecontacts.setFirstName("tizEHCy4rktW31qSlLqkEA7H2zJ2Fjkb2N4KjHcOZ3wLosQ3V7");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("L2zHWr81pb1d44oKafPqgh6ObE8rtDTs9lg7dJnnrEs5VPoHNI");
            corecontacts.setMiddleName("wNdJZDHSUtpIxzm3nAbIFbl3JOhJKgnVc9oTboU3Bh6Nj1ETHt");
            corecontacts.setNativeFirstName("XdJvJXYT8daxs0efyqNXoJS7QtOeEiHkdEuuh6guXQJb1ZZvqc");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("1SVFK6ED72PVsBtSNPtRIsp9DluLgPDyCLaAWTnadne1IudtFq");
            corecontacts.setNativeMiddleName("OYXGq2jjebpVy9YAVFaDkLXGEXKUeYBzkq0GUBePr61b8aATcW");
            corecontacts.setNativeTitle("ms1r59FqQYzeiNRGjMin2noOGaXfzh7Yiim2Ckv4SZ2ANSkC2W");
            corecontacts.setPhoneNumber("4ZX4PBmwSbQMRV20QPgc");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("CohyZd08PIJrl5AkLC8oAjiSQ3kFJG0KyrfMe6Zj3JoStk33Ky");
            departmenttype.setDeptTypeHelp("1dLRmxkSHCi9uxXPGQX16AvQmw56X1aTw9UFBVKqUfjQSOBAOk");
            departmenttype.setDeptTypeIcon("hrH");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("mMq3ojz3LlKTirhp419QzWsfXUu2zqyuTAxjg9VbjpkTRHY2kj");
            designationtype.setDesignatnTypeHelp("OEHBOZp8ehdQElL0MrFiK95iBhYzRhBl85mn0YidvNI0DSATSu");
            designationtype.setDesignatnTypeIcon("cLt");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("zBcwK5oeEcDDHCWRH2tjdjVyC5FUOUt8G7hiWqNGifvSYxIzWC");
            jobtype.setJobHelp("iO99arPfUtFtc9UufcFormOeDaPXLGQq60MUX0rNmK8oZSYtnh");
            jobtype.setJobIcon("piN");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("OeqB1E7RYLZOoniuio20k6d1Zym3BNb8RHZiMIrYdBOtep3hqJ");
            visa.setVisaHelp("HenqkMxv4XhtawSvP3lhz1Od34RrN8bEY21eot3MmuAatyQF9v");
            visa.setVisaIcon("yK6");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("CleXQpdfuxfVwWljfDdZkaMcvXVhza5G0I3VBsHHHRXvrwhRus");
            empinformation.setReportingOfficer("uBDKtjpckiFsbrFuzD0izBKV4xxh3w2AXKC4Mt6coi2WltGdCn");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            AttendenceSummary attendencesummary = new AttendenceSummary();
            attendencesummary.setAbsent(8);
            attendencesummary.setCasualLeave(4);
            attendencesummary.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey());
            attendencesummary.setMaternityLeave(3);
            attendencesummary.setMonth(10);
            attendencesummary.setPresent(0);
            attendencesummary.setPrivilege(4);
            attendencesummary.setSickLeave(7);
            attendencesummary.setYear(1);
            attendencesummary.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            attendencesummary.setEntityValidator(entityValidator);
            attendencesummary.isValid();
            attendencesummaryRepository.save(attendencesummary);
            map.put("AttendenceSummaryPrimaryKey", attendencesummary._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("AttendenceSummaryPrimaryKey"));
            AttendenceSummary attendencesummary = attendencesummaryRepository.findById((java.lang.String) map.get("AttendenceSummaryPrimaryKey"));
            attendencesummary.setAbsent(8);
            attendencesummary.setCasualLeave(4);
            attendencesummary.setMaternityLeave(6);
            attendencesummary.setMonth(6);
            attendencesummary.setPresent(8);
            attendencesummary.setPrivilege(0);
            attendencesummary.setSickLeave(5);
            attendencesummary.setVersionId(1);
            attendencesummary.setYear(4);
            attendencesummary.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            attendencesummaryRepository.update(attendencesummary);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AttendenceSummaryPrimaryKey"));
            attendencesummaryRepository.findById((java.lang.String) map.get("AttendenceSummaryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<AttendenceSummary> listofempId = attendencesummaryRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("AttendenceSummaryPrimaryKey"));
            attendencesummaryRepository.delete((java.lang.String) map.get("AttendenceSummaryPrimaryKey")); /* Deleting refrenced data */
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
