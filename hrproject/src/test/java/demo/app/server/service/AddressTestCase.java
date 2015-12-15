package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.AddressRepository;
import demo.app.shared.location.Address;
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
import demo.app.shared.location.AddressType;
import demo.app.server.repository.AddressTypeRepository;
import demo.app.shared.location.City;
import demo.app.server.repository.CityRepository;
import demo.app.shared.location.Country;
import demo.app.server.repository.CountryRepository;
import demo.app.shared.location.State;
import demo.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AddressTestCase {

    @Autowired
    private AddressRepository<Address> addressRepository;

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
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("108de7hUje0LQzx8XOYTtVIhGxfaVp3V4acSbhWuRfSuT2PcUl");
            addresstype.setAddressTypeDesc("zuxqqiBCNmTQAUyUtULp1N2kISMp9Nt5qFKoTezIcZMdPV2heh");
            addresstype.setAddressTypeIcon("wULUas13xUMz7FZgW1nLDDgAM0mOlxA8IdUjuYwKO8I2XI2INW");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(3);
            city.setCityCodeChar2("U0XU64c59IjmDh3GYGh8QybMnkWUTNl3");
            city.setCityDescription("8Y0uEw42OuDiMh7dOBctfeTG2nnbzr2WUjjHOjk4XiFPdDcbom");
            city.setCityFlag("vbcxWOJv4XmpJyQhjjxd4A1F3FRevxmFnp240CWKAwcduuo8dN");
            city.setCityLatitude(6);
            city.setCityLongitude(0);
            city.setCityName("yZoQbfXItdO3xYKq5QTXPA0iIIpoFmYWU0YcoGisRCBHxfGOIm");
            Country country = new Country();
            country.setCapital("FKO80MW2iXI0ZI5fMkeOOXkraQEoCN8F");
            country.setCapitalLatitude(3);
            country.setCapitalLongitude(8);
            country.setCountryCode1("jVE");
            country.setCountryCode2("HgX");
            country.setCountryFlag("WruaQaxwP1kIf1mrMZW5H0vC8ipRjodSEg6KDbIonzUeBSilDp");
            country.setCountryName("4vW6EbhNjFU9D2ALi3tth8nWwRlnWpardJVyg0i0T3JL3hfg3r");
            country.setCurrencyCode("uLe");
            country.setCurrencyName("mul0Tb7sR98FflRx7jaFE0WM8gHRxXIZCJ42e1s9L9Ve8UYLC5");
            country.setCurrencySymbol("GxdmowclufqqhsMCOzJsHtouYk3hR91h");
            country.setIsoNumeric(9);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("s79t6pLSz6BzxC44qagYgCObRvj9k9hi7EVZCnHXDuhOp5qgmW");
            state.setStateCapitalLatitude(6);
            state.setStateCapitalLongitude(0);
            state.setStateCode(1);
            state.setStateCodeChar2("8FVksZEx8QK9pN5MsWawwfB9ZvRZ9zgt");
            state.setStateCodeChar3("dFD0y6RojweQRSYzPYudm3b360fRcY5U");
            state.setStateDescription("ye54hPGqLcOGcaVO3n4VVVzkdreZTCrSpixmbRw95UqbXeTCN5");
            state.setStateFlag("YRxRTgtXfUH2nh1mRDLlb9PeUSO5DI5t49tCTBcCyC6cMgduYR");
            state.setStateName("5uoE7WDbkaBAoPqDMK1jH2DZAfy2o2aErIyqU6w6dR9NI9Wv8c");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(3);
            city.setCityCodeChar2("1QVVLARWhGlZIyfhOW9E9jjdZqGqHq9f");
            city.setCityDescription("d34nalv39zNDICainTBXho5JeYvN88xBZyUTvBrU9pVCZTiAra");
            city.setCityFlag("nutDv0PdWQFSMqdUmBreGVgRRYej3TQLmvsDtmsuNFCO6DVTSC");
            city.setCityLatitude(8);
            city.setCityLongitude(7);
            city.setCityName("vKDe41PsId8AuiaBvDxwBjjakuPEz7eNeJXM9brqBFeK7YFzKt");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            Address address = new Address();
            address.setAddress1("XV215RvGqZ8Zdm2j0SUH0kxLrAOasHsazoZqgmk6xQ6TkxGVoF");
            address.setAddress2("E6pzylMDQj4mo2Bs2Xzyyjnl0U7nWOY6uDKWAAFJ4M0nlQgIjx");
            address.setAddress3("TiFj6ZexhAYi5yHi0HLeQRDoMPnKgK4e8Ez0jlfQ0ByjFog9yQ");
            address.setAddressLabel("hYg4NguIjxR");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("yacafTeoGbxoLF1ghbfsj3BHggezquSLCnuc6kCtq2PuuecSGj");
            address.setLongitude("dRWByX33YDIxwnMw9OSzJHL6XHM3sASYrvuQ3KeX7OR3z1Rtmc");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("EsnmWZ");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            address.setEntityValidator(entityValidator);
            address.isValid();
            addressRepository.save(address);
            map.put("AddressPrimaryKey", address._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            Address address = addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
            address.setAddress1("EVHxau5PP6xgOzurdMdYBKpPnaTeqbzOtONWjEhZhDxcA7w4WN");
            address.setAddress2("IMxr75u6lr8sywpUNgVffUofE8V5SoXD5Rn3VfIgUVtDSP9tTn");
            address.setAddress3("FZsBFGiS3FONCwNUHjyoTPHFdlU6333YYDguTNjZ1i3wNbcNpy");
            address.setAddressLabel("xbd90zqM6yU");
            address.setLatitude("leKogLuogZBrNkDz0kMDQq3BGMvgF5BQFPwlpqe3r6YestE1py");
            address.setLongitude("ole1WeuJLPwImSJkupq0hWeS96uqhhGYXdZh7ulHOgLFIojZja");
            address.setVersionId(1);
            address.setZipcode("IHcs8b");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            addressRepository.update(address);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByaddressTypeId() {
        try {
            java.util.List<Address> listofaddressTypeId = addressRepository.findByAddressTypeId((java.lang.String) map.get("AddressTypePrimaryKey"));
            if (listofaddressTypeId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycityId() {
        try {
            java.util.List<Address> listofcityId = addressRepository.findByCityId((java.lang.String) map.get("CityPrimaryKey"));
            if (listofcityId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Address> listofcountryId = addressRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<Address> listofstateId = addressRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.delete((java.lang.String) map.get("AddressPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
