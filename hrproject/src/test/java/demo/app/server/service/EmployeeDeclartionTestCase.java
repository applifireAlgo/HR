package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.EmployeeDeclartionRepository;
import demo.app.shared.payroll.EmployeeDeclartion;
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
public class EmployeeDeclartionTestCase {

    @Autowired
    private EmployeeDeclartionRepository<EmployeeDeclartion> employeedeclartionRepository;

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
            corecontacts.setAge(60);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("rfB8XOHpmNHwF96vrFH7Wiewe5mezUpLwiHGQ4faT33cYSqoyd");
            corecontacts.setFirstName("vtxXI8DRkQRlDcwNhBXpmOIKTUgKKVtT2hf5EQsQeq8Q1rLZWj");
            Gender gender = new Gender();
            gender.setGender("J02B5KsTV4f3nw18mYngZTEqQZeyti8Q6VtRUWwLENETWf3yBT");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("ut");
            language.setAlpha3("4Eh");
            language.setAlpha4("FM68");
            language.setAlpha4parentid(7);
            language.setLanguage("W7aYwYRY8A24pN85WNHsmfxyc1mQ3FtDB3eyUC8BKNpjpoz4Iq");
            language.setLanguageDescription("TYKEMiROj4v8XCvkrj76gHqEYsPlsMoLCjeEtpQOw1rMzY733o");
            language.setLanguageIcon("KTsJDhG6VYdrUyHPcz5t5XL310NVa0BFGLquipSDoYdBJCGM2P");
            language.setLanguageType("UQhja9jbPsV6vel3XOE9J9VHT17VbeGB");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("WZbTL6Qpcd2E5tk73qoO9TGxKaZ2F58bVctizmTaXvF5N4kbg1");
            timezone.setCountry("xjNdqwGYsTJebRnVfl0noh353374UFIsCETK2Qpr4h4xYy2DRG");
            timezone.setGmtLabel("s73yI91q0SfhCRuVAHGyFlT5S3PoPpoO8FwnBHp6WkSLazHvEt");
            timezone.setTimeZoneLabel("jCecdK1S1hejoXCgeFSF11NRVlYqF0SfdqDwhYN2e6MPFTQrot");
            timezone.setUtcdifference(0);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("YfiRnwo176dW1iPJYD70MC8wORCOKxBjDFg2iEOTvnxZTseMrS");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(103);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("AZtsZzzEzzH47FKP3EZpKyOOqhyjQn2gGePQDo1yLVP1CF6ohE");
            corecontacts.setFirstName("xCrkGrxmPb2mY1Md4GJ88fwOZenUvP3CaJs3hPJywejXoPX0Mf");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("e1VAcLcWY2z1klC2p9DXulNKQu2DikKZauX7Vop36MqKILuICZ");
            corecontacts.setMiddleName("hnCgfy3jHxLMGqRJMUK1eCZUstEhvSO0ADjsjgClWFd2dzHAmi");
            corecontacts.setNativeFirstName("CdOkZFeeDvMDNFqnRNVzx7FXjdUIRFY1D3mFHj9TXdikgu2JId");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("ekwSs6zE8qf3fBTDE5MAswAXy1Th5rorZ59KrOfRZ4nZBmOZ5r");
            corecontacts.setNativeMiddleName("llu84FEBwyZQwIU9KkDuEdGJyuzLSLB6sYLJeCRheX5eYU6YRs");
            corecontacts.setNativeTitle("TrCdEHaPz0iRKM6Gf3wSQjeiLrWeMgZqmKEaYetqDsNyMFrFqx");
            corecontacts.setPhoneNumber("dauXEscBfB8jOENTiVGp");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("hPUunwTikS3390mAb4yEYI6o7eDMKzhjYdh3fvCIL27MYxoIP4");
            departmenttype.setDeptTypeHelp("5KGG9JyHOTUP0w10xWcnmGxXbmVdiHIyLBxRIol2O1AT7rQ62b");
            departmenttype.setDeptTypeIcon("abY");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("YhsBQZb55CWJmQIQrCwlJA4ya55iHfA7KxpmTwX5yQvV6JSROl");
            designationtype.setDesignatnTypeHelp("Fm1crEmtcZeVo6TFWMDyrCnaiyWQzxYRZA5SCZrO3aKXWu2i9s");
            designationtype.setDesignatnTypeIcon("7YM");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("RISwU80GNOkZzi8HuVKV90JXcx5ugFzha5fj0tMUpg5r7jfL0O");
            jobtype.setJobHelp("S0nxm5IdMryblv72pqSSqoz7TL8gALYIFmkdpZBGt6W8lr9Lem");
            jobtype.setJobIcon("5m7");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("Qt0mGo0iCu9fX0ywpVOeyGj8Q19GC79p1Mex0hYuKxD4TkiHdq");
            visa.setVisaHelp("E47LXww1mmd6bkifgdsxkg9qZ4TFsnZmuIZmn9YbYyEyZmCsO1");
            visa.setVisaIcon("afo");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("naGd659qYB2ZIbLc6N1J4yDCXobZz8mXndrQK6GFjWMIYKu7GX");
            empinformation.setReportingOfficer("Iwtn6IZrGJQfT9gS9b98KDwKC5IDRRGpUhz9jaWqI1M97UHnLz");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            EmployeeDeclartion employeedeclartion = new EmployeeDeclartion();
            employeedeclartion.setEightyC(12.34);
            employeedeclartion.setEightyD(12.34);
            employeedeclartion.setEightyE(12.34);
            employeedeclartion.setEightyG(12.34);
            employeedeclartion.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey());
            employeedeclartion.sethRA(12.34);
            employeedeclartion.setYear(4);
            employeedeclartion.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            employeedeclartion.setEntityValidator(entityValidator);
            employeedeclartion.isValid();
            employeedeclartionRepository.save(employeedeclartion);
            map.put("EmployeeDeclartionPrimaryKey", employeedeclartion._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("EmployeeDeclartionPrimaryKey"));
            EmployeeDeclartion employeedeclartion = employeedeclartionRepository.findById((java.lang.String) map.get("EmployeeDeclartionPrimaryKey"));
            employeedeclartion.setEightyC(12.34);
            employeedeclartion.setEightyD(12.34);
            employeedeclartion.setEightyE(12.34);
            employeedeclartion.setEightyG(12.34);
            employeedeclartion.sethRA(12.34);
            employeedeclartion.setVersionId(1);
            employeedeclartion.setYear(9);
            employeedeclartion.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            employeedeclartionRepository.update(employeedeclartion);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("EmployeeDeclartionPrimaryKey"));
            employeedeclartionRepository.findById((java.lang.String) map.get("EmployeeDeclartionPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<EmployeeDeclartion> listofempId = employeedeclartionRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("EmployeeDeclartionPrimaryKey"));
            employeedeclartionRepository.delete((java.lang.String) map.get("EmployeeDeclartionPrimaryKey")); /* Deleting refrenced data */
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
