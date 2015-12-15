package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.EmpInformationRepository;
import demo.app.shared.employee.EmpInformation;
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
public class EmpInformationTestCase {

    @Autowired
    private EmpInformationRepository<EmpInformation> empinformationRepository;

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
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(114);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("CEyR6vC7B0Ktws8qJiYjgU9M3KwnessKXyEXRABIOJDmuZwqBJ");
            corecontacts.setFirstName("5Wim0jdLKp93MRwDkrd66WSjPrcGsyFTsAx03MEOb5ZQWoIijr");
            Gender gender = new Gender();
            gender.setGender("yehzGetpbvpmCLJAZ3Y5ACFX0pgsGWbdG5cnqYV8MWTxU9Glak");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("qc");
            language.setAlpha3("Y8o");
            language.setAlpha4("N1EW");
            language.setAlpha4parentid(5);
            language.setLanguage("PIGhiQVlzaHIq3iwowBEJUyyAVooQ3bwMHL46T8qAA6JfIYKmh");
            language.setLanguageDescription("AuJkhUuccpaPOhIIiVUWGfrumZOpS1oWDpV7x6IsSi2XpnRvgH");
            language.setLanguageIcon("ZJEduyAHwuxZoImJDvyUpFHY9gDrfx0Uq08pdvnPHUvhUfB8A2");
            language.setLanguageType("aSifuaICwZRvo8AzjHfiLTEooAMoYawe");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("gFECt3j8YFphVeooXTAPrjIJhgVel2NNITzl3L1r5X5nRQbYUZ");
            timezone.setCountry("Cf2g8TphgggFk7u9Uw2vHeRzA7w8Ti8vZBiS0d42Nt8xWeGrak");
            timezone.setGmtLabel("OJ8P2GUbL7RD2LnvqJ0Nq1FkdgbOKTECmr05KNflXNwXBWrk7I");
            timezone.setTimeZoneLabel("UR1bF6QeS7wnLW9ZZ9hjZDZ9x7NkcLXCidL1s4vPI2qt3VYee3");
            timezone.setUtcdifference(6);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("vDPgjXfzOmWqXTxx0YyxeK7N0Aqy8gzEqtDAsw0tANpChmGOK9");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(41);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("7RJlcFNA869l3h0SoacUv0ETyTgTI5dq1OLRMyGHUQxsKhsnmr");
            corecontacts.setFirstName("G4YVjbZ5oJWL53UfS0QGLjfZqRISs8xjfgRAsvbpIrCVhwgsgF");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("6fpURtAAzoUCl8V11j2kukDywnbkPzCmgkfiHJx5miqWXKaZhb");
            corecontacts.setMiddleName("GXhiW4dI2S6rVlwxd7saIq6oOAp0fXhhDmkSVwd5egx5cOaVXk");
            corecontacts.setNativeFirstName("2JiHwZXjEtUcKz9YzrCmcO3iMTR4hEEZBigaRQWddvrQKGbq3D");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("sLH0VzkYRX0n2hGxnp33qzXQJJsoybk6uIhVhTCWU8snw38ggf");
            corecontacts.setNativeMiddleName("zNtfXnOcjI6z7ITSdRokoj5UTMiAu01kOYJ3JsX8pnIyqqpbV0");
            corecontacts.setNativeTitle("Dd5U1hHUMi1VkugQvf2rSid7yum68584bRZTA7v4fhjXExzNrx");
            corecontacts.setPhoneNumber("7k3GFdhBoZFaGiWbru3r");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("JdA1Bw64zmMvfzTgYDaHymv884GFZJpHI1SJ4yASFCrMK3KdSY");
            departmenttype.setDeptTypeHelp("Ke2mXkMriZC8nlgO0RVvsdM4CKy7WDsISR3Neh6sOoxrshKWm4");
            departmenttype.setDeptTypeIcon("ndY");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("8KiK9gqtBDjFXLDsSQbTpnopOyIjqORu86L4ytrVT5iqeIy908");
            designationtype.setDesignatnTypeHelp("eUbd1IJ2pxDsVgR3m5PXWngfk8UDBkrP8XF19yCbrevcPmSFe3");
            designationtype.setDesignatnTypeIcon("CcH");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("tatMabghcMgAukxuY685lGtdWKzEHq12I7PNzftIlhFhQMKy6d");
            jobtype.setJobHelp("ZcCUxRBNcOXNS1BdWdAMr2C3yICs1YHxAswjylngIUEsejaQPA");
            jobtype.setJobIcon("iIL");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("1GewSHNjfPvX3EENUS5zDWaFqHvMpIZZKcLwkE9GyVuyAZnSKy");
            visa.setVisaHelp("5I7VspePOzK7b9C5tgvNJrOOk1kFUi94PjxIjKWulOIgAN84mk");
            visa.setVisaIcon("iom");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            EmpInformation empinformation = new EmpInformation();
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("bNKjV4Y0AANaWZBeDHbz3y8rJjTjHSotZPCmvcwLLPCsLobCOb");
            empinformation.setReportingOfficer("pmjGRHyoqam1APHGoD7d0PRWWWbXR79WU8whpD84iYNOem13Y5");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey());
            empinformation.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            empinformation.setEntityValidator(entityValidator);
            empinformation.isValid();
            empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            map.put("CoreContactsPrimaryKey", empinformation.getCoreContacts()._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

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
            org.junit.Assert.assertNotNull(map.get("EmpInformationPrimaryKey"));
            EmpInformation empinformation = empinformationRepository.findById((java.lang.String) map.get("EmpInformationPrimaryKey"));
            empinformation.setpAN("OuvpH5WzlsNvdwZ6ZvVhyGBDxDLOtjzY4TnH6psRtBwLvVYI4x");
            empinformation.setReportingOfficer("mUj2QKL97d2REVkShwwrLJ75OlQmJgktAxh2n2d4Km30QpGDQA");
            empinformation.setVersionId(1);
            empinformation.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            empinformationRepository.update(empinformation);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBydeptTypeCode() {
        try {
            java.util.List<EmpInformation> listofdeptTypeCode = empinformationRepository.findByDeptTypeCode((java.lang.String) map.get("DepartmentTypePrimaryKey"));
            if (listofdeptTypeCode.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBydesignatnTypeCode() {
        try {
            java.util.List<EmpInformation> listofdesignatnTypeCode = empinformationRepository.findByDesignatnTypeCode((java.lang.String) map.get("DesignationTypePrimaryKey"));
            if (listofdesignatnTypeCode.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("EmpInformationPrimaryKey"));
            empinformationRepository.findById((java.lang.String) map.get("EmpInformationPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByjobCode() {
        try {
            java.util.List<EmpInformation> listofjobCode = empinformationRepository.findByJobCode((java.lang.String) map.get("JobTypePrimaryKey"));
            if (listofjobCode.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByvisaCode() {
        try {
            java.util.List<EmpInformation> listofvisaCode = empinformationRepository.findByVisaCode((java.lang.String) map.get("VisaPrimaryKey"));
            if (listofvisaCode.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("EmpInformationPrimaryKey"));
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
