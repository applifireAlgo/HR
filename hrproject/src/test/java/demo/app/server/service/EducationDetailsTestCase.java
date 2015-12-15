package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.EducationDetailsRepository;
import demo.app.shared.backgroundcheck.EducationDetails;
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
import demo.app.shared.backgroundcheck.DegreeType;
import demo.app.server.repository.DegreeTypeRepository;
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
import demo.app.shared.backgroundcheck.UniversityType;
import demo.app.server.repository.UniversityTypeRepository;
import demo.app.shared.documentmanager.DocumentList;
import demo.app.server.repository.DocumentListRepository;
import demo.app.shared.documentmanager.DocumentType;
import demo.app.server.repository.DocumentTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class EducationDetailsTestCase {

    @Autowired
    private EducationDetailsRepository<EducationDetails> educationdetailsRepository;

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
            DegreeType degreetype = new DegreeType();
            degreetype.setDegreeDesc("fH8ywd38Jw25UUnpttyIAbOh1Rm8OStYhSt85BSb2DoG8UBBm8");
            degreetype.setDegreeHelp("kWah4WyDncGkl1pzhKlJMoqOryNFgmj2rjUWJRWoDandyVyk4Q");
            degreetype.setDegreeIcon("Y4C");
            DegreeType DegreeTypeTest = degreetypeRepository.save(degreetype);
            map.put("DegreeTypePrimaryKey", degreetype._getPrimarykey());
            EmpInformation empinformation = new EmpInformation();
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(19);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("2pd45TSbGtenyW4MtU2a21AqjQn27ORGycKXnOtUBRanwe4QfZ");
            corecontacts.setFirstName("NKpuhrdiA8jhBgF1bm6GLYwHsGL8p3nJKBhAlQWOZKOBOIaHAt");
            Gender gender = new Gender();
            gender.setGender("87jX55Q0PTC14bvCXacWWaH8DJmMVhbVnsAtGBwgVJdAObDcY3");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("7D");
            language.setAlpha3("IGQ");
            language.setAlpha4("VnLR");
            language.setAlpha4parentid(2);
            language.setLanguage("SGLtjZPNoTCsYNnboaKtDVwdeKwaoRxUzOs2Ug9mk5YL3Eft8b");
            language.setLanguageDescription("HIJJ7OSIjJbScEZQD5NewfW1mw2bNRNkMi4SBAUk27yrenM1K6");
            language.setLanguageIcon("aPketu1d3DStyRB76JyFbeNK502enhGlZPFaDuvARbWao5SpLr");
            language.setLanguageType("Qmyo8l5WpvQCvT4JFNrzOulX6wwywTpj");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("JDHGv1kJI751xkYVxMLRP4jLCsOlDla25y8piTZvOrT6PY6Z6N");
            timezone.setCountry("K0WeOH8nB9tqcbBuBrrPQCGa04UvksM9Sj1R20OMSL45wUw9FS");
            timezone.setGmtLabel("Oko9tiXrgB6T14rVahZdPPrvapON2JzkGlnuJIGShkrRPy14TX");
            timezone.setTimeZoneLabel("H626hKhdEyZWrx1HkwbtvZ9zQ8PDNmwypxqADgdI3jYqfLJyim");
            timezone.setUtcdifference(5);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("PpKaIOEghje4Fg67YxVZArQBsgMxUXnhsdMY2YP0hpWWjMPVyX");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(1);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("xWuBdnhs3QmxTqyiS1pSZlReE4ROnkKPpSoTo2q5jXafoZNGCo");
            corecontacts.setFirstName("ljygreOj7aMD9TwvDqnm9j7RzYhU0yHNI1c4Z08tYDgl7lnx3Y");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("HHT3qoDcguBNhgydPfKhQzLYaZnh5540sdzno12lcBZSaE9Vgz");
            corecontacts.setMiddleName("pOodaFOTbklgm4AwEYDrVNAKLxnkaSCZrQZU8MzmidsHbCB3QJ");
            corecontacts.setNativeFirstName("P2XNERjeLUrbcT9cLZC9z08Md3j7q4iEPttE6V0lnwCwkS3pmr");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("Ym67f8zyf2qO9X7TNMdi7LHMiWVXCAoCjWfpBLhYiJZfB2CYAj");
            corecontacts.setNativeMiddleName("avKvIh91owec7MxeArTKQFraf2ho7VdIMo8ZyrLCh0gfjeX5P2");
            corecontacts.setNativeTitle("F7OB77VzlH8P6H2LNV8XmMrSnlgDYKnJD38KUMQScxz8dPvirz");
            corecontacts.setPhoneNumber("6LWreqmi1u4GTxxJ2Xv1");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("5Us0fiUeIP9VSfOngrDG3kEt7gKvkdOy71Pq30WnVhpahTgdaN");
            departmenttype.setDeptTypeHelp("Ri7GxtuJx4JCkIarXo587owMPFC8YRSLoneyEzXZns1jog1e77");
            departmenttype.setDeptTypeIcon("D5a");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("oKAqqFWDwmFBFh0rdmaysRr5b0S78pz2OzLg1g0H2TvswoUdoQ");
            designationtype.setDesignatnTypeHelp("qRnY3YdHz4YWtNgXmlppdvNuVKSrUM8k4I12l6stvyNN43pQ1b");
            designationtype.setDesignatnTypeIcon("v7D");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("GrBU5JdDYdOtrtJu3mdXagIzfB5aLTldZgugcUpc6R26mCDCAG");
            jobtype.setJobHelp("aMs4UriuTOsHOkhFaPfzX6IeXXW1JQjg3aHBKezPqx4POudeOS");
            jobtype.setJobIcon("JPN");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("5570wNgE3DcaMwMBDXtWXGs309KYuEqkgwVoNZZzIojx8jEUMp");
            visa.setVisaHelp("CFjgPchZikQryDq6gQmtEKyNiC3YvEK9gjFu11p96uI7jazX2E");
            visa.setVisaIcon("QVN");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("xnSnetdxdNxfJmlkoTOmnkUT8q3MHTXGa3rxXEUlNeXaH1fQSL");
            empinformation.setReportingOfficer("Im9qlnL5oE3FyDglUf3Lf5pTI3q4ZjOkWBJaSDkp9Rwt3W8f0N");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            UniversityType universitytype = new UniversityType();
            universitytype.setUnvDesc("UTUSKCn30V7My7caSttTuLH9lzbMpSGywffLgGjSlH5wM0nu0I");
            universitytype.setUnvHelp("gkFvoSbiYJCcLFwBo9thmyRbhUHtW4ea1tqcLGkhimj34ZnR2C");
            universitytype.setUnvIcon("7mP");
            UniversityType UniversityTypeTest = universitytypeRepository.save(universitytype);
            map.put("UniversityTypePrimaryKey", universitytype._getPrimarykey());
            EducationDetails educationdetails = new EducationDetails();
            educationdetails.setDegreeCode((java.lang.String) DegreeTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            educationdetails.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey()); /* ******Adding refrenced table data */
            educationdetails.setUnvCode((java.lang.String) UniversityTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            educationdetails.setYearOfGraduation(8);
            java.util.List<DocumentList> listOfDocumentList = new java.util.ArrayList<DocumentList>();
            DocumentList documentlist = new DocumentList();
            documentlist.setDocDate(new java.sql.Timestamp(123456789));
            documentlist.setDocDesc("zQ1d3s0FOqjO3PHghigRibK5Q3hpia04Z356HAmp6MT0VdLvPw");
            documentlist.setDocFile("lxuMx97ARUYRF07msirwM2swcZ2XZ3J5BawWFbt3xHEbOIhFUw");
            documentlist.setDocName("yYuZuzLE3V3OLHaGXOzuZEOVHXaLz7R0kYThu8adw1QU3UPMo5");
            DocumentType documenttype = new DocumentType();
            documenttype.setDocTypeDesc("abzyPjc1qkIbNIH18165J0veshUKtuwmMnLDjAdb45FohH2WWN");
            documenttype.setDocTypeName("hLEhs6rERKUYB0o2yXzVpRbvwDvuguqtwuSx19Jw9YnfnVFsDb");
            DocumentType DocumentTypeTest = documenttypeRepository.save(documenttype);
            map.put("DocumentTypePrimaryKey", documenttype._getPrimarykey());
            documentlist.setDocDate(new java.sql.Timestamp(123456789));
            documentlist.setDocDesc("1scudImXzqvzYEMYqZi3Q9Ocn2w38ItYoaqTCiQzM8hwN8JKho");
            documentlist.setDocFile("kkN2hZa8rJFNc59UG5T8cIq6izydcsv33Q38HGqZ4JXhQcUpwZ");
            documentlist.setDocName("A42jfVqMwDk7HhNrK9Ae0SCUOLTOQPoQ7RXqIUVfz9gftSWrwh");
            documentlist.setDocTypeCode((java.lang.String) DocumentTypeTest._getPrimarykey());
            listOfDocumentList.add(documentlist);
            educationdetails.addAllDocumentList(listOfDocumentList);
            educationdetails.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            educationdetails.setEntityValidator(entityValidator);
            educationdetails.isValid();
            educationdetailsRepository.save(educationdetails);
            map.put("EducationDetailsPrimaryKey", educationdetails._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private DegreeTypeRepository<DegreeType> degreetypeRepository;

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
    private UniversityTypeRepository<UniversityType> universitytypeRepository;

    @Autowired
    private DocumentListRepository<DocumentList> documentlistRepository;

    @Autowired
    private DocumentTypeRepository<DocumentType> documenttypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("EducationDetailsPrimaryKey"));
            EducationDetails educationdetails = educationdetailsRepository.findById((java.lang.String) map.get("EducationDetailsPrimaryKey"));
            educationdetails.setVersionId(1);
            educationdetails.setYearOfGraduation(1);
            educationdetails.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            educationdetailsRepository.update(educationdetails);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBydegreeCode() {
        try {
            java.util.List<EducationDetails> listofdegreeCode = educationdetailsRepository.findByDegreeCode((java.lang.String) map.get("DegreeTypePrimaryKey"));
            if (listofdegreeCode.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("EducationDetailsPrimaryKey"));
            educationdetailsRepository.findById((java.lang.String) map.get("EducationDetailsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<EducationDetails> listofempId = educationdetailsRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
    public void test3findByunvCode() {
        try {
            java.util.List<EducationDetails> listofunvCode = educationdetailsRepository.findByUnvCode((java.lang.String) map.get("UniversityTypePrimaryKey"));
            if (listofunvCode.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("EducationDetailsPrimaryKey"));
            educationdetailsRepository.delete((java.lang.String) map.get("EducationDetailsPrimaryKey")); /* Deleting refrenced data */
            documenttypeRepository.delete((java.lang.String) map.get("DocumentTypePrimaryKey")); /* Deleting refrenced data */
            universitytypeRepository.delete((java.lang.String) map.get("UniversityTypePrimaryKey")); /* Deleting refrenced data */
            empinformationRepository.delete((java.lang.String) map.get("EmpInformationPrimaryKey")); /* Deleting refrenced data */
            visaRepository.delete((java.lang.String) map.get("VisaPrimaryKey")); /* Deleting refrenced data */
            jobtypeRepository.delete((java.lang.String) map.get("JobTypePrimaryKey")); /* Deleting refrenced data */
            designationtypeRepository.delete((java.lang.String) map.get("DesignationTypePrimaryKey")); /* Deleting refrenced data */
            departmenttypeRepository.delete((java.lang.String) map.get("DepartmentTypePrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey")); /* Deleting refrenced data */
            degreetypeRepository.delete((java.lang.String) map.get("DegreeTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
