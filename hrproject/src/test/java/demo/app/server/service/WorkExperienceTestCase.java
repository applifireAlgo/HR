package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.WorkExperienceRepository;
import demo.app.shared.backgroundcheck.WorkExperience;
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
import demo.app.shared.documentmanager.DocumentList;
import demo.app.server.repository.DocumentListRepository;
import demo.app.shared.documentmanager.DocumentType;
import demo.app.server.repository.DocumentTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class WorkExperienceTestCase {

    @Autowired
    private WorkExperienceRepository<WorkExperience> workexperienceRepository;

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
            corecontacts.setAge(112);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("dTUIdmhKno1dmsGQAXDfiwMRrl2ty4KPQT6PCOGymFa0pYeDPn");
            corecontacts.setFirstName("Sj3Ep4Tpyl20jADycbhuYWzrN4qW7Ip7aTXzqUweb8USzSfBrE");
            Gender gender = new Gender();
            gender.setGender("0wsoizijntNef9bQ9cnjoUaVR7dZDxDHajbd7gV84TeRjHZf4O");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("Z2");
            language.setAlpha3("5nS");
            language.setAlpha4("htzu");
            language.setAlpha4parentid(10);
            language.setLanguage("PDwfJRWTIDhH1DZ1D375OFUV0S6gfFtKTxzuAryOt8vBdYYT5E");
            language.setLanguageDescription("Ufmxs7QxrSF3yW7LTEhPxn8N67duRELr8MIgEyvoQwtlPNJyGn");
            language.setLanguageIcon("mRCKFcGzmcZce373wSoUez6vV4fsbnQMqbuI9wKzQS7psHf2dS");
            language.setLanguageType("sdV9Pq7wZfbt2kz1kQBZ2XtZaZvgBHfv");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("Twr00XpD8c0aCF8wyhAmr2Bxw3mvRl8tvxou7dj1dDjiBnKY7l");
            timezone.setCountry("R7RM23uZQUNRNLZPQROUyhhqp0SqhURtrytgeEHM81uMMOzfRG");
            timezone.setGmtLabel("nCuQeROPquA8ZaruZwKgmZpAYkEiMJ7OhpcIGzp90VuNkLL5xp");
            timezone.setTimeZoneLabel("1x9PNHUhtlk0p7XprvIBeGLhcQWVK5LbZkWpQqUlmRfWbWAPz6");
            timezone.setUtcdifference(5);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("kGzLUcFxc9NAz8DcwMi83UdesYp7QIl4uqt7ODVnFEwJC6szuJ");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(72);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("yN8nZGKVEU6rewhVWKPMaksCYF22fgoyJkmOx9OLWudmSnkv2G");
            corecontacts.setFirstName("rVJmojUJUYzNqZrALXDFhCn709u0rO4KDKruGGrA0zJZqwfNor");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("I5zBsiB04wRmKuFnPIMR0VKlrBWc9GMfifIwlBb3mR3LT7J0f3");
            corecontacts.setMiddleName("vOKx72LmvfyY5WcVmvXocoLPYLcUK7Yg71xpjN9DRM3iu2knxC");
            corecontacts.setNativeFirstName("LyvW0OZpVsWPXst54EogtQo2fx8zREKKbrUeBborwa0cnnaCql");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("xvvXzLjebyvo0FX6JIhC8IIl9R4FB32ZDJxW00YYWaVawdSWt0");
            corecontacts.setNativeMiddleName("CskxvdMgak9b6jJc7E4LHh5QlSIGyyxFLQB8zJYacsHzAQulAm");
            corecontacts.setNativeTitle("GnyRI2V3WvsQZwYZhDGggPNllfR8uOvSSRrqupd3Fdjfj6GMhF");
            corecontacts.setPhoneNumber("iMtsvgWkwAQf5TA9m8H8");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("bEjcqbwcx2Jpr8vuUw70Z8b3Rrga4RVJSwsUirDbdKBfmoSnXS");
            departmenttype.setDeptTypeHelp("fKgUtgNcquutqGNIV2NCWmOvrAA4WA3um73nQdAbaUy4RFAxTl");
            departmenttype.setDeptTypeIcon("sQO");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("yGadsVTYOgw1SPVM14UuMdCGMJEBlVWqlTZ13MGmOOiXjBkSKX");
            designationtype.setDesignatnTypeHelp("VlSdo2CspwJV9lPLGg4n5UJUX5BxTV0tzDjYdSAKKHV7YxdKWy");
            designationtype.setDesignatnTypeIcon("zi9");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("xWuFxb2ljqgiSrhn9odJBtjFYwv4PxqfFCSWx3hvhenLCnuwsZ");
            jobtype.setJobHelp("tPShemF0EYPm4mMikGPjxvm3c8CDsvRzOvmEn42ppQHPKxUFuz");
            jobtype.setJobIcon("Cx7");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("BBrHFObCaDDxDwSAddJ09fSyv79F3bAWRGkoYhmkp2BgnZxwnE");
            visa.setVisaHelp("oHJhb4mqfh1eGY6dQmA2T4stPyQ7d78ytcxLv1YmULpT0fWWv0");
            visa.setVisaIcon("q2N");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("hOotbaQP9lqK5gv3OTAatkOibWG0ziRJMAmcF2GtQpzsJqMfUW");
            empinformation.setReportingOfficer("OxbsR8NvM3j5NQi5WfdFdvvVTksvH4H44rtDuVYWnDv01bozxH");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            WorkExperience workexperience = new WorkExperience();
            workexperience.setDuration("aeWeu9sjJ1eFC7ZrsFKV9ULcdzOzh1Q3f9MSGh5828eDybfDwX");
            workexperience.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey()); /* ******Adding refrenced table data */
            workexperience.setImmediateSupervisor("gCYQwSRcpdMee3dSU7bLOpyfJrBVdl43nHhZEfEJUWjRpGiZPf");
            workexperience.setJobTitle("Tw53iAviFmpFy03TKCvw8eGhzWixDJkY36R0aOjgwXVrRYK5Da");
            workexperience.setPreviousCompany("08ETQNYNKaUPBKr3j9ea93sPcYqkIlnt0RBN26oPLXCg6sJmJr");
            workexperience.setReasonForLeaving("NARZX6H6XwR0588uv5MAvQIVGD9KDrAvCNlDMbDZNFW81bN9vE");
            workexperience.setSalaryPerAanum("7O6DatgvN2sjlUPbUPF3OwDjTzDjKf4Xr7A6WAvrOaOyprNMLn");
            workexperience.setSupervisorContactNo("MIj4BTsVbE");
            workexperience.setWorknResponsibilities("n36VQnXUF6Cu0T3qF91xufgHEb2VvufiLjgRmUjNevAFpKcfuU");
            java.util.List<DocumentList> listOfDocumentList = new java.util.ArrayList<DocumentList>();
            DocumentList documentlist = new DocumentList();
            documentlist.setDocDate(new java.sql.Timestamp(123456789));
            documentlist.setDocDesc("rus75Ep5XPqb0dVxx9XN40yIn3PZbrnf41ALHRxXcuhvafq0lc");
            documentlist.setDocFile("xswOjKGI9BmKoF35sF50pWeCxJBIflRqmhItCVSNDiUw6URPDt");
            documentlist.setDocName("l7J9WzCfA00Y8MZtiryL9Ajq17oKCs0BVEWctai0Lpg4oecVi0");
            DocumentType documenttype = new DocumentType();
            documenttype.setDocTypeDesc("jnjuhCAgSMUPhOdUwWBiaShUAUEzNBZnr8jFzjw6t4GPq0iLrw");
            documenttype.setDocTypeName("EZvo7OTfFt8sWzMwKrVV7mTO5nmnSP3XTuvZiH4VQl3MOPgCdX");
            DocumentType DocumentTypeTest = documenttypeRepository.save(documenttype);
            map.put("DocumentTypePrimaryKey", documenttype._getPrimarykey());
            documentlist.setDocDate(new java.sql.Timestamp(123456789));
            documentlist.setDocDesc("d9qqFE9Xka9rXh013TAa66Nyw6etTFdGsebvJITz3vvjkRKyzH");
            documentlist.setDocFile("XTrZ2D7qHFEtfB5R5EPjpLu263emppJR43zAOTq8QF9iSdMSvE");
            documentlist.setDocName("EM1kclpVScCaW8UhdCPqTV8BDU5H3J6usi5e8OdWePbhGEGHVB");
            documentlist.setDocTypeCode((java.lang.String) DocumentTypeTest._getPrimarykey());
            listOfDocumentList.add(documentlist);
            workexperience.addAllDocumentList(listOfDocumentList);
            workexperience.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            workexperience.setEntityValidator(entityValidator);
            workexperience.isValid();
            workexperienceRepository.save(workexperience);
            map.put("WorkExperiencePrimaryKey", workexperience._getPrimarykey());
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
    private DocumentListRepository<DocumentList> documentlistRepository;

    @Autowired
    private DocumentTypeRepository<DocumentType> documenttypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("WorkExperiencePrimaryKey"));
            WorkExperience workexperience = workexperienceRepository.findById((java.lang.String) map.get("WorkExperiencePrimaryKey"));
            workexperience.setDuration("8XbRKVkSCuVeMatA0zLRPmm8Newmzc7PzOFqsdqvgDccfvNjL9");
            workexperience.setImmediateSupervisor("44eJbR3gD2JvbpXxtBoNeleoJhh0yQfFbjwhKfBSBv0QpeeS00");
            workexperience.setJobTitle("2bfr1kzjYx3bab0VO8Q8dXweX7UhiBzKitDAbg6IKuW9r2xgjf");
            workexperience.setPreviousCompany("gIixR1I21g2VBDlH5LKpvB0PMRfZJwTfFoaGqR65C70IMejnox");
            workexperience.setReasonForLeaving("oX3ivukPK11GsSHkr1zTN2qvgutrCF9xAXcBePhh99BUeOVwvZ");
            workexperience.setSalaryPerAanum("mLPIqv8YOcKhN6xdKtcIMcFe4Crn6WK9fztYPuB6Hc2FPhM4Fs");
            workexperience.setSupervisorContactNo("yChbXbkY0r");
            workexperience.setVersionId(1);
            workexperience.setWorknResponsibilities("hXEC0pjQkgwFgGMX78dM9gF230VteaQuRxdCaSHdytcK0oadEU");
            workexperience.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            workexperienceRepository.update(workexperience);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<WorkExperience> listofempId = workexperienceRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("WorkExperiencePrimaryKey"));
            workexperienceRepository.findById((java.lang.String) map.get("WorkExperiencePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("WorkExperiencePrimaryKey"));
            workexperienceRepository.delete((java.lang.String) map.get("WorkExperiencePrimaryKey")); /* Deleting refrenced data */
            documenttypeRepository.delete((java.lang.String) map.get("DocumentTypePrimaryKey")); /* Deleting refrenced data */
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
