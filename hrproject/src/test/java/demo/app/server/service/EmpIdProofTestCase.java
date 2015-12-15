package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.EmpIdProofRepository;
import demo.app.shared.employee.EmpIdProof;
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
import demo.app.shared.employee.IdProofInformation;
import demo.app.server.repository.IdProofInformationRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class EmpIdProofTestCase {

    @Autowired
    private EmpIdProofRepository<EmpIdProof> empidproofRepository;

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
            corecontacts.setAge(80);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("92XuoD88CLlf2Q5YhLq7y0rfeOv7j5BLWHagELFuPGSESC1ESC");
            corecontacts.setFirstName("LaL39qBwCoyf8KMef6Qc8NlIbFBAHm6meieHJHXiJWxZ8rDpND");
            Gender gender = new Gender();
            gender.setGender("8DJpB658infYQ65k6rNfIMhaVBSKjrApRzEWfaM3coxHmLmwWi");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("Yo");
            language.setAlpha3("2o9");
            language.setAlpha4("xO51");
            language.setAlpha4parentid(11);
            language.setLanguage("H01OjtCM20vlCZxg4DH8Yqc0uJLRHqNhcoyoK44hHfQoD7zd7D");
            language.setLanguageDescription("l8md6ADvgQUPvEYttw4l2lzMG0otQ6MoU2BKkCJoNlIWgYsLGt");
            language.setLanguageIcon("xYmWaHuiCEknEX1HI8bJ682eAZoPa1sQq63KW4LyAcY6CqqpCJ");
            language.setLanguageType("9VVAe9TilcxFO1wZplKfvwQeqMGImk1J");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("mCHh0v5xJ5d0eoTTSPdIME4DUqZ7eCD4zoA1bot7tm7rVg5WTT");
            timezone.setCountry("W3ESt1gqEcNWqdvOWQOjPa3VvbSoiUPlpeiNiMgCZf3Hx6jsN4");
            timezone.setGmtLabel("sIjedneInX3tK1himIFD6yZghAH1XgcKLEUD0UYVz0inPwpEGh");
            timezone.setTimeZoneLabel("1YIgZtRaKa1OAvMESkncaD5yPzjh98CDo9ogjIW7yYd4LV8hNI");
            timezone.setUtcdifference(9);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("S3JBnQ6nnMs0HMmfLYfR5YySPyzsayHl39INUz7ft4zt2PFEqW");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(28);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("zv8FANgp3X48pA2DND00hIdNCAfg1CsqL5rEaXwD87Hm3DxyZP");
            corecontacts.setFirstName("hNpmYWKD0b3sdcwIODnxncsN9M5IGqJ3dzZtejaAPMZ4DaluE4");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("l1fGs9Udp5clsGItGctKYRdKIEvo3ph9GV94AxxKyLsjLFSkjC");
            corecontacts.setMiddleName("6TByxoVI8OLVhgaEVfo42Wh0qcBBSjhEIlGr3ybNsYmVYwxvy0");
            corecontacts.setNativeFirstName("e5xl8ehoZQcRWLZ1SASJmqZRTRYT9DaeGCH6tsAEMbyUU7XIqs");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("LRU5417utbtG0prfUeYSjMYWCr2vmc7Zkvh56lv4eYEAFbkTsF");
            corecontacts.setNativeMiddleName("EgSELZJFYIrRtenVHr2Dm3rm5ahz6f1C5BRgPR36sZif8j9e4m");
            corecontacts.setNativeTitle("MdY0X20slMTq11DErvg7rwhA3rrn61SWHtGcKod2f648TUdrwM");
            corecontacts.setPhoneNumber("oputGxv83uFIJAKJrQxK");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("aUMgLWMLpcaXy0SmMfN8RUDKemauwJEqwi2CzavTzNZQBRHQRL");
            departmenttype.setDeptTypeHelp("U8ibd4a3zW73HCLKkmn6jVFVS6eEDkyDa7WaWRvI2KzY9E3su8");
            departmenttype.setDeptTypeIcon("h96");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("neZv190WFNdEQHfuj1Y0hxAAiluf3AAc8001xCSXRWiSRbxv5H");
            designationtype.setDesignatnTypeHelp("cTGYNyJx7yqstjIOU35nCGlljpf7MYtMk2ufiCZYqDEYGWPszt");
            designationtype.setDesignatnTypeIcon("RvO");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("XNig4urEVQWjiWeaNn32RA7AKtJ6WU1vcaQxxB5cU2Y4blydLD");
            jobtype.setJobHelp("3bXo79I0ow135HnKvJtbRZlTlZEsVD6SLFxEKNM6lqoF4sCoSl");
            jobtype.setJobIcon("hhx");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("hApAcxnJj1XmNjoRQ9bGsn6BgRXJM5XdDCo7jQW5cdWZWEpRBR");
            visa.setVisaHelp("e2SpSUexx6PDLSuny2imeTYdcu6pthCUkQkIoc3xxLJ9NQ9XN7");
            visa.setVisaIcon("ZVN");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("ntnSBqDNjoy5V2vV9eRXE8iV3bYEuAzA8jUM6W1Qhbf0WPOgmQ");
            empinformation.setReportingOfficer("bTMCuofniPAgB4voCyAskHXIzDkdkI8semDDoWGTW0Ti682yVU");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            IdProofInformation idproofinformation = new IdProofInformation();
            idproofinformation.setIdDesc("4CYaFf6MHm4D0sDyyjuRNxqa2IeU9xjuzsBQjNbteiNn8f2Iin");
            idproofinformation.setIdHelp("ats7Zebknx7uNsF2F3wRiKjZ21zCQejC08pIw09W71n1z5HzZj");
            idproofinformation.setIdIcon("2fc");
            IdProofInformation IdProofInformationTest = idproofinformationRepository.save(idproofinformation);
            map.put("IdProofInformationPrimaryKey", idproofinformation._getPrimarykey());
            EmpIdProof empidproof = new EmpIdProof();
            empidproof.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey()); /* ******Adding refrenced table data */
            empidproof.setIdCode((java.lang.String) IdProofInformationTest._getPrimarykey());
            empidproof.setIdData("ASZzQPN2jyO75PJXS5mJXYungSKN3lv1pssENGkBTuAZX6KSDa");
            empidproof.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            empidproof.setEntityValidator(entityValidator);
            empidproof.isValid();
            empidproofRepository.save(empidproof);
            map.put("EmpIdProofPrimaryKey", empidproof._getPrimarykey());
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

    @Autowired
    private IdProofInformationRepository<IdProofInformation> idproofinformationRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("EmpIdProofPrimaryKey"));
            EmpIdProof empidproof = empidproofRepository.findById((java.lang.String) map.get("EmpIdProofPrimaryKey"));
            empidproof.setIdData("vgs8xEqIXhQ5YR8ln1i8Az30NB4JBbQwiQ5ofoBsA6DnhnxsvW");
            empidproof.setVersionId(1);
            empidproof.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            empidproofRepository.update(empidproof);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<EmpIdProof> listofempId = empidproofRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("EmpIdProofPrimaryKey"));
            empidproofRepository.findById((java.lang.String) map.get("EmpIdProofPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByidCode() {
        try {
            java.util.List<EmpIdProof> listofidCode = empidproofRepository.findByIdCode((java.lang.String) map.get("IdProofInformationPrimaryKey"));
            if (listofidCode.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("EmpIdProofPrimaryKey"));
            empidproofRepository.delete((java.lang.String) map.get("EmpIdProofPrimaryKey")); /* Deleting refrenced data */
            idproofinformationRepository.delete((java.lang.String) map.get("IdProofInformationPrimaryKey")); /* Deleting refrenced data */
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
