package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.CoreContactsRepository;
import demo.app.shared.contacts.CoreContacts;
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
import demo.app.shared.contacts.Gender;
import demo.app.server.repository.GenderRepository;
import demo.app.shared.location.Language;
import demo.app.server.repository.LanguageRepository;
import demo.app.shared.location.Timezone;
import demo.app.server.repository.TimezoneRepository;
import demo.app.shared.contacts.Title;
import demo.app.server.repository.TitleRepository;
import demo.app.shared.location.Address;
import demo.app.server.repository.AddressRepository;
import demo.app.shared.location.AddressType;
import demo.app.server.repository.AddressTypeRepository;
import demo.app.shared.location.City;
import demo.app.server.repository.CityRepository;
import demo.app.shared.location.Country;
import demo.app.server.repository.CountryRepository;
import demo.app.shared.location.State;
import demo.app.server.repository.StateRepository;
import demo.app.shared.contacts.CommunicationData;
import demo.app.shared.contacts.CommunicationGroup;
import demo.app.server.repository.CommunicationGroupRepository;
import demo.app.shared.contacts.CommunicationType;
import demo.app.server.repository.CommunicationTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CoreContactsTestCase {

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

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
            Gender gender = new Gender();
            gender.setGender("JzVmu0eozfkNRyR3FhfZYtehu6ZDw4HRFWnACrVzWzcMmVB9jc");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("CK");
            language.setAlpha3("ebf");
            language.setAlpha4("KcRc");
            language.setAlpha4parentid(9);
            language.setLanguage("ymWRkUnUZAKKhDDGWSXsbXL1Izfs200hFkTWB7rvOvpR1BKT49");
            language.setLanguageDescription("xN3SeNPXT3W0tnwpsGMrynHkZ34cJikqIg5DdGyk9PEqoVrw3i");
            language.setLanguageIcon("LDFlH3bOgA0EyhaQpvf1bd1sooHhDoICLkHff78IdkogRi2R5h");
            language.setLanguageType("FfXYttc84qG0E2ff4CuiaQhHaICDEtCk");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("Gvkx9BCKKzTkA2nxT0VjH91mK4W71SXsWc5KlbpsCmUMOnxKNK");
            timezone.setCountry("xqLTmqGecVjNazfusENZ8FECDtMc5zj4JzyraQGgG8bK4b0FnN");
            timezone.setGmtLabel("9m95jPWomq8cOM3cQpF83mXfigvPYZNx0BIdKR2lOrQ6s8pyRk");
            timezone.setTimeZoneLabel("yP4vnwCZ3f1IBVCzUVGgq17guM0eQrNlOjBJpJygZ2JATzLd0K");
            timezone.setUtcdifference(11);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("focDDyPPbYhFkMuSpHOKRLg5dnWl7Dh7TNQBp7R5yDyXwyONWZ");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(118);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("HP4fT95zT8YgcI0MIpE0CoX0zm5lOqhrMaaNB890o01uIqNVTm");
            corecontacts.setFirstName("LWS4ynwPp8JDaL0txztv7JaayFuRBoTCB7KIG06U9GFIOOAC1J");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("iGfbthDw5XGVyn8ZzyiEbhi41AOHmhGKEQw9eFP4mAJoJ39802");
            corecontacts.setMiddleName("zFKepbTb7Vllm6fUTLso271KVr1WdoYvtt075jTRtgdf45sSaO");
            corecontacts.setNativeFirstName("oHZ1sRMVeT5f9xkPSjlYVfgGj3faZILdDmHwXkd6hgVI3snhCw");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("5gMcCSQezonh4JXMRJ9098EkwFBCoNVJEYRazZ2HOWqzpZ8ssU");
            corecontacts.setNativeMiddleName("gyHuoOU8mkBjmLZaQc19wzoQEJamngAmbCJXDvO30TgsQlocaN");
            corecontacts.setNativeTitle("7CyqBUbDgvKFBtvp6thKytmrhkt3Q68q8e4qGqmBx2QogkU2yK");
            corecontacts.setPhoneNumber("RFgXZaE5O6xyPr4FlukL");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            java.util.List<Address> listOfAddress = new java.util.ArrayList<Address>();
            Address address = new Address();
            address.setAddress1("N85qw7FACWeI5crEPtjaum8BDdR9ETrIl4OixMVV9SRZSEgpXb");
            address.setAddress2("LB1Ku26vbgIcyTfVEeQFwCQBymB6LbL9zsKgr3cfKVnbKMvRzi");
            address.setAddress3("WnMIZwwGhjXfCCXc6Qq9UkhLg735r2pBtU0pBX5K5hQGB2xCaa");
            address.setAddressLabel("sAEKUDClm7X");
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("9Pcsi76aiLzfTbJMvVoHYrtnh1WUfGrgyW9PebhDWSBjKZLaDt");
            addresstype.setAddressTypeDesc("JSkRHpJ6AbX2sBbbmJivt7GcxwSZ9YxDG1miNHTr5pmAHo2Dn9");
            addresstype.setAddressTypeIcon("jDKHYqfKcr6MAcqyjgZ5ZnbGd8yHXkDDM9MMEiiWoNOAmrBO2s");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(2);
            city.setCityCodeChar2("BX3Tj3YpvLYXNUI4ux4V5RuoFDGtSncK");
            city.setCityDescription("DF9w8JmOUMHtd31ScpMAy0PE7zZAA9YeKIFpvHTDL6e3lE0LSZ");
            city.setCityFlag("fGbJqtDqvtho38DWX6CIGBhDxGJGfPBWiEv0cXcZUOzgSq0Rxy");
            city.setCityLatitude(5);
            city.setCityLongitude(0);
            city.setCityName("H8zooreQrCp4lXXUJHw2EoghJD2U0wq8zCDgyj76NqebYDVTZv");
            Country country = new Country();
            country.setCapital("Zvf8HdsFnCeG0f90VjuB73N06ZHKyhnv");
            country.setCapitalLatitude(11);
            country.setCapitalLongitude(6);
            country.setCountryCode1("io7");
            country.setCountryCode2("XbQ");
            country.setCountryFlag("R0RJ2GYA65vbWqU9KJI5HZmsAOgTwRa5nUOZyH7irRIk4pkK8h");
            country.setCountryName("qlxVV0QC3KrM9ZqVsRzFh7mreVKwlQjVbqM6CPnKoG9Awdaobl");
            country.setCurrencyCode("tqN");
            country.setCurrencyName("fdIqWRTlFt0lsZuo9UlQeoOccv1rRekuhXf9MTvDQ8LgyCc71C");
            country.setCurrencySymbol("g5zNKfv7Fud5mY3cnFiq8zD9muDW8Lbv");
            country.setIsoNumeric(8);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("sdcAMdpqH2CRgztHOHvPoW0U4Ry9Iiv1sbZUq1zz37RHCMYYP0");
            state.setStateCapitalLatitude(0);
            state.setStateCapitalLongitude(2);
            state.setStateCode(0);
            state.setStateCodeChar2("JjkeLY6fbw6famJ0epuLOq8hPMYNanN8");
            state.setStateCodeChar3("LaRxLLFtnTmR0Ub2u8ZsmKKc446MvTC2");
            state.setStateDescription("003E0zOsfn9eP6Zu0GHsZRrFNXdmGUhCuO9GIGs43x1es7gJ9O");
            state.setStateFlag("N7ZTf4BgnSPNkGW2XfyzBhkYdt5bXvoW6zlzM2sU2GyGKuD8B5");
            state.setStateName("28UV56Nu8pBp94hK2BXCzSsQ6Tt4QnobMEyIQdTO88Cl6Vg75A");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(3);
            city.setCityCodeChar2("4K0NDW87YdblQMR11uZmUwAz74uGlGem");
            city.setCityDescription("Ph0t23QcddPlCHfVCiwmLWwoPnP8VUVYRkyAmDss9ajqUZDh48");
            city.setCityFlag("6xgooZLg9Kky8477bILw893UzwDIQIXsFPTgxPsLuwi0VZyC6H");
            city.setCityLatitude(10);
            city.setCityLongitude(8);
            city.setCityName("ghvJRxiFNxBMa64KcBdRdqZ7srRa7lnY29Ai2SS1c5B2Yk9Pi3");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            address.setAddress1("AkYyzrqzalfxvmwByZSa5394PUhk5jO7e9AaNs0JXxoD4qhRUC");
            address.setAddress2("dLK7QTsn406Lo9MXC7WYN5z1q4QNCdykuDe9pObo5UFXVBgQ34");
            address.setAddress3("T8PFd8id4EKb126tqXxJ6Nn86wty7p9vFJxmaFCGLjCbXmMQUT");
            address.setAddressLabel("Ay6drPW5uyV");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("08TONROulKbdqJd0pYefttl21b64UHEbEm03NpvO1FCT8AJaLI");
            address.setLongitude("wuEXfoj1rXDTB6alrWVzMP3EcXb2K0RMY5vPrSN1N4om0JlGzC");
            address.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setZipcode("D3Suh7");
            listOfAddress.add(address);
            corecontacts.addAllAddress(listOfAddress);
            java.util.List<CommunicationData> listOfCommunicationData = new java.util.ArrayList<CommunicationData>();
            CommunicationData communicationdata = new CommunicationData();
            communicationdata.setCommData("DxA");
            CommunicationGroup communicationgroup = new CommunicationGroup();
            communicationgroup.setCommGroupDescription("LpVPI6ngeXy8KW2OOcWJXHOgaIzMQKkgmmiTziddqYpOPffZR5");
            communicationgroup.setCommGroupName("TelsNdFpU4DX5MBVoOKx6pYbb1AkPgpdtF3VZbmefVYnQSShRj");
            CommunicationGroup CommunicationGroupTest = communicationgroupRepository.save(communicationgroup);
            map.put("CommunicationGroupPrimaryKey", communicationgroup._getPrimarykey());
            CommunicationType communicationtype = new CommunicationType();
            communicationtype.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationtype.setCommTypeDescription("p3Y3Pk9L4Lnz3fETicsAf9JiFz2Kw79UvRbHgxZVNeHAwwJFgt");
            communicationtype.setCommTypeName("u5Pb9eUqlKgXvuiMvTuiULN1NBBQ9MNhPTyB9GfXLpvxHLiQnZ");
            CommunicationType CommunicationTypeTest = communicationtypeRepository.save(communicationtype);
            map.put("CommunicationTypePrimaryKey", communicationtype._getPrimarykey());
            communicationdata.setCommData("pV4");
            communicationdata.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationdata.setCommType((java.lang.String) CommunicationTypeTest._getPrimarykey());
            listOfCommunicationData.add(communicationdata);
            corecontacts.addAllCommunicationData(listOfCommunicationData);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            corecontacts.setEntityValidator(entityValidator);
            corecontacts.isValid();
            corecontactsRepository.save(corecontacts);
            map.put("CoreContactsPrimaryKey", corecontacts._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private AddressRepository<Address> addressRepository;

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private CommunicationGroupRepository<CommunicationGroup> communicationgroupRepository;

    @Autowired
    private CommunicationTypeRepository<CommunicationType> communicationtypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            CoreContacts corecontacts = corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
            corecontacts.setAge(77);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("BLRwPfYfQ9bDv2UlcbGLybvs62zv3ZXLmUUqexGxkDAOs00QhX");
            corecontacts.setFirstName("xN0qx1uz7JMWvJEA6aK33nsiqs3oISuZkrZqFdmO7JDZYgq3I5");
            corecontacts.setLastName("G8aapqpzyn4dRnex39SZgr5TFSkAbSgSUApK8m8sTL6LbJeIKJ");
            corecontacts.setMiddleName("iJJLlSh0tyWGBO5xuFhwi2q2OX50uL4aVICNBpwiAmTvQwfmZq");
            corecontacts.setNativeFirstName("11u2D5RzIMPteCuqctnzH0XaJAzPJS3xE6DSJSaimewuQo19Q8");
            corecontacts.setNativeLastName("5xQWSbXe52azStKvN1hVKusvejW0q9OzBKm9QDMbFyGXkiL5mo");
            corecontacts.setNativeMiddleName("9KFeahzbI46ArQVf3yb17RSGNv8qrHFyidbMU93TuLZUOXJclv");
            corecontacts.setNativeTitle("DeK1Ctkb4Vzb5ElIKG62a4r7jvAPn08Uoiq67nTDmZ3rZrmH26");
            corecontacts.setPhoneNumber("yWFVTUTzQlqrj4briYJ9");
            corecontacts.setVersionId(1);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            corecontactsRepository.update(corecontacts);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBygenderId() {
        try {
            java.util.List<CoreContacts> listofgenderId = corecontactsRepository.findByGenderId((java.lang.String) map.get("GenderPrimaryKey"));
            if (listofgenderId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBynativeLanguageCode() {
        try {
            java.util.List<CoreContacts> listofnativeLanguageCode = corecontactsRepository.findByNativeLanguageCode((java.lang.String) map.get("LanguagePrimaryKey"));
            if (listofnativeLanguageCode.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBytimeZone() {
        try {
            java.util.List<CoreContacts> listoftimeZone = corecontactsRepository.findByTimeZone((java.lang.String) map.get("TimezonePrimaryKey"));
            if (listoftimeZone.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBytitleId() {
        try {
            java.util.List<CoreContacts> listoftitleId = corecontactsRepository.findByTitleId((java.lang.String) map.get("TitlePrimaryKey"));
            if (listoftitleId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.delete((java.lang.String) map.get("CoreContactsPrimaryKey")); /* Deleting refrenced data */
            communicationtypeRepository.delete((java.lang.String) map.get("CommunicationTypePrimaryKey")); /* Deleting refrenced data */
            communicationgroupRepository.delete((java.lang.String) map.get("CommunicationGroupPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey")); /* Deleting refrenced data */
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
