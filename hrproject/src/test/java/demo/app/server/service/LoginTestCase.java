package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.LoginRepository;
import demo.app.shared.authentication.Login;
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
import demo.app.shared.authentication.User;
import demo.app.server.repository.UserRepository;
import demo.app.shared.authentication.UserAccessDomain;
import demo.app.server.repository.UserAccessDomainRepository;
import demo.app.shared.authentication.UserAccessLevel;
import demo.app.server.repository.UserAccessLevelRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class LoginTestCase {

    @Autowired
    private LoginRepository<Login> loginRepository;

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
            corecontacts.setAge(29);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("Bz2gCgS75hWCKJeRJeVZnoq9Qa3Tx7BpmOwbVfFwXNHyqiqZBn");
            corecontacts.setFirstName("nF4ph6TRaNPMLaxjIjumecXdkbI0ySWuvFIagvxJYZ8ysWtWyr");
            Gender gender = new Gender();
            gender.setGender("4gt3K0tH4n2egIESV20qddEhKxPJo0dpBpkMy2uPU0M3mqdZ6U");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("zX");
            language.setAlpha3("753");
            language.setAlpha4("Wk7w");
            language.setAlpha4parentid(9);
            language.setLanguage("iAqsFAiVXzINJgiS84kcSb2xPQbwlacq959vxDJDD0EkV7njLa");
            language.setLanguageDescription("W5nSR3jOiyIpJydtxEZOu1ZqzzIbPcbihcZ6RCR6VNYSF3s4Zb");
            language.setLanguageIcon("98Lgui4xityeMuVE7gJkGgwcV11N5VHTI3S5c366A0LC9PqVyi");
            language.setLanguageType("i6bA3p6zujKSz2Q5bpvnjjNSmhJqEzAl");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("oXIZu6bXNtwoXZ5SYPMUBuXaPARjskeDUqnGJ0lu2FTH007cLf");
            timezone.setCountry("QCMwWqoijQsWjJYtdP7kEl9jJ9q4zBProcQ3sMpDUt4ohyma4R");
            timezone.setGmtLabel("Glf34KMAY6VNfULDfcmZKFQ4t4BRYP4ogvClySnOfl1pGb5Rix");
            timezone.setTimeZoneLabel("w2Kg8Y90nJGhgBUqqstkGMMt2iK6pHGD251vzbjmFwaWseqOuR");
            timezone.setUtcdifference(8);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("jkDTObjlL1K5dXgvreckKuW1iIos8bQRgEvPnprT61ZEq34oUJ");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(19);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("xyxVO9GnOeIyhJq3GSyHw4WJ1POksjT4z75wSOrmqYzWPKCrTc");
            corecontacts.setFirstName("XNFsyNoRFXuwLLegTkggJEUb632T9yPSwf9Udhbk7XyuFgzGNj");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("7yJARWplHirFh6pSM6qOM2jYTNld3ePKY1zqy61sUgEeHwfir9");
            corecontacts.setMiddleName("z8KbdRtxPeBkbndAe2CdJsQ6RXDlz1e9MF6uStIgazyqstnZFE");
            corecontacts.setNativeFirstName("mS15mjz7sdcUNK3KT9N5lUo4I48OKMWJ8zOpvfKdyAc3girYI6");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("dGwPX2wksytp6SBvHrnepOdzTrzx7MFzLpe0QoCGjRnVcfKmUu");
            corecontacts.setNativeMiddleName("wEs8pa5BO0cycxCq6dq9fQzEE5bJSIk9w86pNoZVAZ0Ll4vS4y");
            corecontacts.setNativeTitle("0cyt1NnjsSppUQVbeVxn9SCvZ5TiJujEKj2vlT3Hv2Z9HkeJMi");
            corecontacts.setPhoneNumber("kXS4Yk1OLbAbaUaaXdhj");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            User user = new User();
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(0);
            user.setGenTempOneTimePassword(0);
            user.setIsDeleted(0);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(0);
            user.setPasswordAlgo("lCHU8axULUR3V2UIxN9xc3aka7OY2cvyZF8lV1wBs7fzeA8Ery");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(3423);
            user.setUserAccessCode(11);
            UserAccessDomain useraccessdomain = new UserAccessDomain();
            useraccessdomain.setDomainDescription("aCkzeeQCpC78SYN42u7TV8AwZjNlKpyyXyimiOb6cvimTjwgWj");
            useraccessdomain.setDomainHelp("XemT1d1RPiqv2bGOfMJ8BsHMS8Vksgrbbv9DBrQHIoTNKEA8NU");
            useraccessdomain.setDomainIcon("RsWi7euqwBbGdzUtWAQmowJx8R9hfut6uxjfj060XeXBpLIl26");
            useraccessdomain.setDomainName("n6aL6vANgyOjjZkIXplWMa2Q0rPDnHi5Jk2x1LBnB08sZaIvKW");
            useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
            UserAccessDomain UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
            UserAccessLevel useraccesslevel = new UserAccessLevel();
            useraccesslevel.setLevelDescription("Qc9itD2KN7kYdFt9HBBUcvdiJnALSwHDLLbL8Y3NrShYizaSGx");
            useraccesslevel.setLevelHelp("2cwP7bfQO1HWphiVEHnQrXfVSEuzGPbRvMWgFBnQnokQg17kD5");
            useraccesslevel.setLevelIcon("RRhVp8t09MPd4peV7OKJy9IE6WXIpPu3kSuCWjHHijQwSvV3Eq");
            useraccesslevel.setLevelName("3NGFzfC5Bd1BxxlKAFG3KD0WMDhU9JrjCEczehGianFiTKJPcJ");
            useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
            UserAccessLevel UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(0);
            user.setGenTempOneTimePassword(0);
            user.setIsDeleted(1);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(1);
            user.setPasswordAlgo("otNwbz9M5tX3Ke4dnMtnxGFEhbWfTcBh5ahlhWfq1vPJOjNqk6");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(498);
            user.setUserAccessCode(7);
            user.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
            user.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey());
            Login login = new Login();
            login.setCoreContacts(corecontacts);
            login.setFailedLoginAttempts(8);
            login.setIsAuthenticated(true);
            login.setLoginId("BNSubak57MCnvVMVcNUJp7fR6V4x2JDEucgRzQpvRixzssSmMh");
            login.setServerAuthImage("m71MwjRmqeO0u3lcsOzdZCi9XbgxKnys");
            login.setServerAuthText("43CHrZOhlvI8DENr");
            login.setUser(user);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            login.setEntityValidator(entityValidator);
            login.isValid();
            loginRepository.save(login);
            map.put("LoginPrimaryKey", login._getPrimarykey());
            map.put("CoreContactsPrimaryKey", login.getCoreContacts()._getPrimarykey());
            map.put("UserPrimaryKey", login.getUser()._getPrimarykey());
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
    private UserRepository<User> userRepository;

    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            Login login = loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
            login.setFailedLoginAttempts(0);
            login.setLoginId("BwaUJ6cwBuqTD5Km6SyI9718m42s2JYfr8IIZAPQ4deRvHiiZC");
            login.setServerAuthImage("VoWsFwUii5t1vWqt0PDkDq06vguAat3x");
            login.setServerAuthText("j7YcyQI6jRlUYw1t");
            login.setVersionId(1);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            loginRepository.update(login);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void testNQFindMappedUser() {
        try {
            loginRepository.FindMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQFindUnMappedUser() {
        try {
            loginRepository.FindUnMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.delete((java.lang.String) map.get("LoginPrimaryKey")); /* Deleting refrenced data */
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey")); /* Deleting refrenced data */
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey")); /* Deleting refrenced data */
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
