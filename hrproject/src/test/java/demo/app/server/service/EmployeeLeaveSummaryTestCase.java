package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.EmployeeLeaveSummaryRepository;
import demo.app.shared.attendance.EmployeeLeaveSummary;
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
public class EmployeeLeaveSummaryTestCase {

    @Autowired
    private EmployeeLeaveSummaryRepository<EmployeeLeaveSummary> employeeleavesummaryRepository;

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
            corecontacts.setAge(12);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("qEecDoZAhLcm91td61aXr29hvzfTLByqjgEeH7W9d2Z5Xmeqml");
            corecontacts.setFirstName("uozGVdircf22yvVRRDZVaZ3tq47z6gHzwqA3dV1eolfJjTqNYN");
            Gender gender = new Gender();
            gender.setGender("vo4JDK5BOobIhd3dWgXkfG8H23gvLHJ5oIHe3fIjB4pvmDB0X6");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("sd");
            language.setAlpha3("qhB");
            language.setAlpha4("Vi52");
            language.setAlpha4parentid(5);
            language.setLanguage("4yiQ2P3kE9jFhR59g5khsk8qbxxUMBvPLCql8G54xOUfpRDyTL");
            language.setLanguageDescription("nmdF5a1BPs4mKuwDa61ueQs6VQimXgCVQXMFFk3rmkNzKf2tVb");
            language.setLanguageIcon("yhqLCo2y5mecxYfSAM4MUSaBsB7Dm26eU6rmpVTGtIfyTdJZan");
            language.setLanguageType("p8CclePepXij6TQFIwe5Uh5oZspwNiVW");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("pLYaZ5OTgrBCyVj7HWzpCWg2JAVyBjiFuGbJSyaf5RLKxBbTM5");
            timezone.setCountry("nxXb2G5A32F8Z01oDGqsmhqnbAVSoKyaZVTRSegVi6luR9Ff5R");
            timezone.setGmtLabel("6tb7FakTmlxgojmgSjE47REOaPXSrUPOPZKzS13KcivwWzXhAr");
            timezone.setTimeZoneLabel("ErZX45IhvanxK5Ydc2JF8NGHaeT3S3sXtHmwpwKQBDaVGGAp5P");
            timezone.setUtcdifference(2);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("Aor1b2gq79dyfb6rzvr9sw6JYdnD0dmqeBxB0eKe6eX8DbVt5T");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(101);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("eQdjnHTmyZ769Jmsh1vGhAZ2bstrEd1L65o3xuvIOVNUs6uHXU");
            corecontacts.setFirstName("4DZ7dEEIgB68Raykz43OEjCcXQP44xGlQKu7duRPuLiK1qzE8E");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("aRLVEfSvDiBIckH3puMVrP9qpxE4Owv8IP9JWmaQFizddDaFRp");
            corecontacts.setMiddleName("HuQ52486ClluDYvXgkazaEKoGjihPAlHCt11UCp6tTCUKnDIpL");
            corecontacts.setNativeFirstName("gNiFbeZU0rEK0JBzPKpNVOEIVEl9Y2YYpjfArOZHLEN2Db4LCv");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("PV8sKt3kqwa2dryUNijXh9QG8t5WlZhbN8Fr4TwwvcUo3vd3qG");
            corecontacts.setNativeMiddleName("iDb4Ev21RDomG6pApGnp77B3K8s8DqDOryvQNfiIrWzEFBdDBg");
            corecontacts.setNativeTitle("MPvLVvkai0ZOClaGXhI9evldYEYjrnGj0iNDmLSRFRYpZ9T4bY");
            corecontacts.setPhoneNumber("vYwcigDI96pYyMpZGnDK");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("43PzwfnQlcNcBxN0pmol9l0LFqP0YVwJtjJwPlrVUPEMYC0L02");
            departmenttype.setDeptTypeHelp("2yTrWHHddny2xiFn5fUxaucWIrg9hskJH0OMe5qofK3W2uuiZM");
            departmenttype.setDeptTypeIcon("klZ");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("0sJInjBF1JjSI9zztrqAQJVfIkjrahWggLEtAuKgxKZifu89wM");
            designationtype.setDesignatnTypeHelp("hJIvdK9axy9ZPTxyPkksxAUwJXL7pSIJdTGeq5Dd8byzR6oLZF");
            designationtype.setDesignatnTypeIcon("z8S");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("r73La7P5YfFHFHQBUharHwNEoJoifa3bffDMznhgOVHJSMTNjL");
            jobtype.setJobHelp("PBpxoQdDfKgpAx4BhjVp5suaVzh5BqyfycCXCnHR34JEjA6JE7");
            jobtype.setJobIcon("cOx");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("BBMNNCU3xNR122EfWLXTb8dZi8XYFEnsW8XWhXUw3xBlCZk71M");
            visa.setVisaHelp("PUA8FVJpcuCieyB2PMvsHeIenXgsr4l0mCu7LzhtX9TCdeXZ2x");
            visa.setVisaIcon("o4u");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("0Z9JTdYDcDLylRvNe0QfBW1c8xKpEzMmG7uw9taifo3mCElgC2");
            empinformation.setReportingOfficer("J2RsGt33CQ3rsCSMEVVyci11ou6PveO8c0b0O2MgJVnLhfjPus");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            EmployeeLeaveSummary employeeleavesummary = new EmployeeLeaveSummary();
            employeeleavesummary.setCasualLeave(4);
            employeeleavesummary.setCasualLeaveTaken(4);
            employeeleavesummary.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey());
            employeeleavesummary.setLop(1);
            employeeleavesummary.setMaternityLeave(0);
            employeeleavesummary.setMaternityLeaveTaken(3);
            employeeleavesummary.setPrivilege(5);
            employeeleavesummary.setPrivilegeTaken(9);
            employeeleavesummary.setSickLeave(3);
            employeeleavesummary.setSickLeaveTaken(0);
            employeeleavesummary.setYear(2);
            employeeleavesummary.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            employeeleavesummary.setEntityValidator(entityValidator);
            employeeleavesummary.isValid();
            employeeleavesummaryRepository.save(employeeleavesummary);
            map.put("EmployeeLeaveSummaryPrimaryKey", employeeleavesummary._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("EmployeeLeaveSummaryPrimaryKey"));
            EmployeeLeaveSummary employeeleavesummary = employeeleavesummaryRepository.findById((java.lang.String) map.get("EmployeeLeaveSummaryPrimaryKey"));
            employeeleavesummary.setCasualLeave(6);
            employeeleavesummary.setCasualLeaveTaken(2);
            employeeleavesummary.setLop(0);
            employeeleavesummary.setMaternityLeave(0);
            employeeleavesummary.setMaternityLeaveTaken(3);
            employeeleavesummary.setPrivilege(4);
            employeeleavesummary.setPrivilegeTaken(6);
            employeeleavesummary.setSickLeave(8);
            employeeleavesummary.setSickLeaveTaken(8);
            employeeleavesummary.setVersionId(1);
            employeeleavesummary.setYear(2);
            employeeleavesummary.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            employeeleavesummaryRepository.update(employeeleavesummary);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<EmployeeLeaveSummary> listofempId = employeeleavesummaryRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("EmployeeLeaveSummaryPrimaryKey"));
            employeeleavesummaryRepository.findById((java.lang.String) map.get("EmployeeLeaveSummaryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("EmployeeLeaveSummaryPrimaryKey"));
            employeeleavesummaryRepository.delete((java.lang.String) map.get("EmployeeLeaveSummaryPrimaryKey")); /* Deleting refrenced data */
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
