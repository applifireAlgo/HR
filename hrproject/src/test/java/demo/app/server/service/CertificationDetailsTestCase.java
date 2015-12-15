package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.CertificationDetailsRepository;
import demo.app.shared.backgroundcheck.CertificationDetails;
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
import demo.app.shared.backgroundcheck.CertificateType;
import demo.app.server.repository.CertificateTypeRepository;
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
import demo.app.shared.backgroundcheck.GradeType;
import demo.app.server.repository.GradeTypeRepository;
import demo.app.shared.documentmanager.DocumentList;
import demo.app.server.repository.DocumentListRepository;
import demo.app.shared.documentmanager.DocumentType;
import demo.app.server.repository.DocumentTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CertificationDetailsTestCase {

    @Autowired
    private CertificationDetailsRepository<CertificationDetails> certificationdetailsRepository;

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
            CertificateType certificatetype = new CertificateType();
            certificatetype.setCertDesc("ZenvJKfis5CkMeQOfctqRaKYLM9iBNRiVvtL2DU4v9zouILamK");
            certificatetype.setCertHelp("TJfNeM8cQfjLGA5On4HDrSui6ZI7uW0FQBYrJqiltXkJzegkne");
            certificatetype.setCertIcon("WTG");
            CertificateType CertificateTypeTest = certificatetypeRepository.save(certificatetype);
            map.put("CertificateTypePrimaryKey", certificatetype._getPrimarykey());
            EmpInformation empinformation = new EmpInformation();
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(7);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("OuI1gs1tvxIcYDgGEt8U4N5LjlkQF4hED5uos9hC03mAwayPGK");
            corecontacts.setFirstName("icd40EUThQfXqA08UWikn59QviiJ7TXAYcRtkPoY23YF2PZ51H");
            Gender gender = new Gender();
            gender.setGender("jozmY4dJ4ighuPvAi9XVjfaAzBg39y4qTNEdxKBj6KWLsgAxsm");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("Sg");
            language.setAlpha3("sdq");
            language.setAlpha4("mfZs");
            language.setAlpha4parentid(9);
            language.setLanguage("noeHCcSvWicjr0PIL6PRoLeYXp03hTR8OIy7xRr1vsx8USIhWZ");
            language.setLanguageDescription("i8TaL2vfEe8eHN2RyTeglSQpxHzYVZYXrSwoKq1tba9DqeEAZy");
            language.setLanguageIcon("czhf5GmIOh5Tffr30gAxO0b68ReSPot0U3fc63KogBzKcrsBts");
            language.setLanguageType("AlMZI9yWa9AW1JOVUHP9bDTdy4kuBKtz");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("A0cZr7zUPPUWu91SNKyFzOi9NVTwtM0kC4r9IdNdlmdus0YDmI");
            timezone.setCountry("KcYAPISYHTORVHrrtTzBRxmKfhSMexhw8XtqHv6BcOxIvJBLku");
            timezone.setGmtLabel("hwv9Sw4NOBo3DmIsygrT59318tNZ2w5FcpKfEF0BugPCJIjujm");
            timezone.setTimeZoneLabel("jLeqo4tg9aIj68GoDGTmRDyWkSvVPcqHgpfh6FF29xL11CcIV9");
            timezone.setUtcdifference(4);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("6t0lF1AiYsM0PrOOYmy7oLb4bhKbkkpi0t7iVuPzLYaezuLwZ0");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(125);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("FgMTw8oaGYHwt3NIE3wznGwtEjnwPgRRnrkeIsiSeRwFNmwvwA");
            corecontacts.setFirstName("vs7l6auu5oed1CnTMri6aGPN8kAYeqGOLN5aZxW1csGXfezoAT");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("9erftxRqZggygnYK0vakMCUwr6TuyP0elxmK78OMxlahMwrC22");
            corecontacts.setMiddleName("TwM7tODDC6RH2KknnGGJs2t40FSLl7TFJjtGqhb4V2RV8vm4Ud");
            corecontacts.setNativeFirstName("pLHLGVcMuM8S6j1xbDfzxzOvaGK9sHS8gZtfNaKysj6aIsfOk8");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("k2TZWGkPDt3BHmMjt7EIPaKgurXOT662byIJUcOMQWGsfpGAzf");
            corecontacts.setNativeMiddleName("APNVfOC4iAvNU7WQ2WCQNvIPurX9RbRzEiX8SqBoarGjMgyjKP");
            corecontacts.setNativeTitle("Iv6Rj73CV7ZK5WyI1yLv6HCsw0inoeDSfJM8MHVyaSS38RvoGM");
            corecontacts.setPhoneNumber("gLocWhACNSNK1FaZZVgq");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            DepartmentType departmenttype = new DepartmentType();
            departmenttype.setDeptTypeDesc("8WDWX1af37AIrdNiEE12D3YJBXrRD1cco3S52OcfGVSd0jRHnA");
            departmenttype.setDeptTypeHelp("9hiEYw8FdAEPDHrI6mgrPboYhpb7hSK19gbNIzRuBKDu0YspOQ");
            departmenttype.setDeptTypeIcon("moP");
            DepartmentType DepartmentTypeTest = departmenttypeRepository.save(departmenttype);
            map.put("DepartmentTypePrimaryKey", departmenttype._getPrimarykey());
            DesignationType designationtype = new DesignationType();
            designationtype.setDesignatnTypeDesc("XZW5cn9O00TpBur01w3XFScxpV9HfZmLIH1OGriFhVevTSspgL");
            designationtype.setDesignatnTypeHelp("1V3aCPQlgFuHpKPWOhJ83hsHktGwmGh08E4op2oc5G29wk1wfk");
            designationtype.setDesignatnTypeIcon("bTG");
            DesignationType DesignationTypeTest = designationtypeRepository.save(designationtype);
            map.put("DesignationTypePrimaryKey", designationtype._getPrimarykey());
            JobType jobtype = new JobType();
            jobtype.setJobDesc("GpAYRhnsmZ0awAXq8RVxNHU8gngevGGFJjNJqQenADx4Zv6Rod");
            jobtype.setJobHelp("C5CxRdO0G0T449PPqJnBUg2OuIep5oXdOYZQlsreAMWXaTSaq4");
            jobtype.setJobIcon("m2T");
            JobType JobTypeTest = jobtypeRepository.save(jobtype);
            map.put("JobTypePrimaryKey", jobtype._getPrimarykey());
            Visa visa = new Visa();
            visa.setVisaDesc("vyyBqTbVkFS0sIL9h2K8XWBT5Ri8vO8rmdnUjicnBvK5zQ3aUg");
            visa.setVisaHelp("weE0on6UdNBW9HwZ1Gicz4e9EsXNEi5xVzAcUc7FvSuK01cLNp");
            visa.setVisaIcon("d4c");
            Visa VisaTest = visaRepository.save(visa);
            map.put("VisaPrimaryKey", visa._getPrimarykey());
            empinformation.setCoreContacts(corecontacts);
            empinformation.setDeptTypeCode((java.lang.String) DepartmentTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setDesignatnTypeCode((java.lang.String) DesignationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setJobCode((java.lang.String) JobTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            empinformation.setpAN("7Cj8jd4dVL7yrxmpR2gU6WpQVmHEyFlSMp1EhNfDzTGomNrowY");
            empinformation.setReportingOfficer("Bsa4oNT4FgoVcCc0lfkiqqb086z8tqpQabraF0IsfgZ1x9mk6p");
            empinformation.setVisaCode((java.lang.String) VisaTest._getPrimarykey()); /* ******Adding refrenced table data */
            EmpInformation EmpInformationTest = empinformationRepository.save(empinformation);
            map.put("EmpInformationPrimaryKey", empinformation._getPrimarykey());
            GradeType gradetype = new GradeType();
            gradetype.setGrdDesc("ejQpKrQbrX2YwQiIQb3C0cRf6kgjZC82dPSVzWi5c8udN0kMp2");
            gradetype.setGrdHelp("InkYGIKocK2SrgpWnBwW076s3ODTmVbUYwU0adIMTT4qkAkk5J");
            gradetype.setGrdIcon("wTI");
            GradeType GradeTypeTest = gradetypeRepository.save(gradetype);
            map.put("GradeTypePrimaryKey", gradetype._getPrimarykey());
            CertificationDetails certificationdetails = new CertificationDetails();
            certificationdetails.setCertCode((java.lang.String) CertificateTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            certificationdetails.setEmpId((java.lang.String) EmpInformationTest._getPrimarykey()); /* ******Adding refrenced table data */
            certificationdetails.setGrdCode((java.lang.String) GradeTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            certificationdetails.setInstituteName("utSKbzHIVvVngqwuJtLJAALpUboQcWftk7uwXGqADB8aZE0yEE");
            certificationdetails.setObtainedDuration("Ge7Ex1HeAh6ftcLmH5J1yO7t6b65JvSKjTutYhnLoYktS7YDL7");
            java.util.List<DocumentList> listOfDocumentList = new java.util.ArrayList<DocumentList>();
            DocumentList documentlist = new DocumentList();
            documentlist.setDocDate(new java.sql.Timestamp(123456789));
            documentlist.setDocDesc("HCdTkJpU2Ehuyh0IfQr1wqYTcrtabwERxSltn3nA1Rr5RKC0yv");
            documentlist.setDocFile("nWRVudSAbQyczIUS3KtQp9hAxze9F7XtD1WXkiwvYNoNDslvqZ");
            documentlist.setDocName("xgiPoIBggkJRjbf3usqjEFer1BeLS4sRYHgdcVVr4BXploluds");
            DocumentType documenttype = new DocumentType();
            documenttype.setDocTypeDesc("QHjagEHRedrTTtc2NPOx78588ah91gamBwzJhDDWpobXpS6iov");
            documenttype.setDocTypeName("3dbuvfYLiDntbfNYDWBv0PztPlrEMFQnTuuzEaobxxJjAoEC7x");
            DocumentType DocumentTypeTest = documenttypeRepository.save(documenttype);
            map.put("DocumentTypePrimaryKey", documenttype._getPrimarykey());
            documentlist.setDocDate(new java.sql.Timestamp(123456789));
            documentlist.setDocDesc("PE6sF2apefzZHSTj1Vn9azjXc5RPUVkPMHgPUs0Wiq2JZPRWvF");
            documentlist.setDocFile("95uSeYCjonBP5wQOWjQfgQwqsHQfHrJE2t3IMNnBfBKmjlu5IH");
            documentlist.setDocName("KLSyXhvWwJtAqoiq1cP5Ux6RDjlJzsy0WSCYBaO7YIifs3Csvy");
            documentlist.setDocTypeCode((java.lang.String) DocumentTypeTest._getPrimarykey());
            listOfDocumentList.add(documentlist);
            certificationdetails.addAllDocumentList(listOfDocumentList);
            certificationdetails.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            certificationdetails.setEntityValidator(entityValidator);
            certificationdetails.isValid();
            certificationdetailsRepository.save(certificationdetails);
            map.put("CertificationDetailsPrimaryKey", certificationdetails._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private CertificateTypeRepository<CertificateType> certificatetypeRepository;

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
    private GradeTypeRepository<GradeType> gradetypeRepository;

    @Autowired
    private DocumentListRepository<DocumentList> documentlistRepository;

    @Autowired
    private DocumentTypeRepository<DocumentType> documenttypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CertificationDetailsPrimaryKey"));
            CertificationDetails certificationdetails = certificationdetailsRepository.findById((java.lang.String) map.get("CertificationDetailsPrimaryKey"));
            certificationdetails.setInstituteName("yZavRMnNJ8G1Ew2uuP0ipFG3fdX7tolgMPTiOIi1konntAEXfs");
            certificationdetails.setObtainedDuration("PEXz0mvxDTkoJvuMs3HBQ0KmTt6P2pvExha5mqc3VtVgIT0h4R");
            certificationdetails.setVersionId(1);
            certificationdetails.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            certificationdetailsRepository.update(certificationdetails);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycertCode() {
        try {
            java.util.List<CertificationDetails> listofcertCode = certificationdetailsRepository.findByCertCode((java.lang.String) map.get("CertificateTypePrimaryKey"));
            if (listofcertCode.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("CertificationDetailsPrimaryKey"));
            certificationdetailsRepository.findById((java.lang.String) map.get("CertificationDetailsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByempId() {
        try {
            java.util.List<CertificationDetails> listofempId = certificationdetailsRepository.findByEmpId((java.lang.String) map.get("EmpInformationPrimaryKey"));
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
    public void test3findBygrdCode() {
        try {
            java.util.List<CertificationDetails> listofgrdCode = certificationdetailsRepository.findByGrdCode((java.lang.String) map.get("GradeTypePrimaryKey"));
            if (listofgrdCode.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("CertificationDetailsPrimaryKey"));
            certificationdetailsRepository.delete((java.lang.String) map.get("CertificationDetailsPrimaryKey")); /* Deleting refrenced data */
            documenttypeRepository.delete((java.lang.String) map.get("DocumentTypePrimaryKey")); /* Deleting refrenced data */
            gradetypeRepository.delete((java.lang.String) map.get("GradeTypePrimaryKey")); /* Deleting refrenced data */
            empinformationRepository.delete((java.lang.String) map.get("EmpInformationPrimaryKey")); /* Deleting refrenced data */
            visaRepository.delete((java.lang.String) map.get("VisaPrimaryKey")); /* Deleting refrenced data */
            jobtypeRepository.delete((java.lang.String) map.get("JobTypePrimaryKey")); /* Deleting refrenced data */
            designationtypeRepository.delete((java.lang.String) map.get("DesignationTypePrimaryKey")); /* Deleting refrenced data */
            departmenttypeRepository.delete((java.lang.String) map.get("DepartmentTypePrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey")); /* Deleting refrenced data */
            certificatetypeRepository.delete((java.lang.String) map.get("CertificateTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
