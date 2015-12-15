package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.VillageRepository;
import demo.app.shared.location.Village;
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
import demo.app.shared.location.Country;
import demo.app.server.repository.CountryRepository;
import demo.app.shared.location.District;
import demo.app.server.repository.DistrictRepository;
import demo.app.shared.location.Region;
import demo.app.server.repository.RegionRepository;
import demo.app.shared.location.State;
import demo.app.server.repository.StateRepository;
import demo.app.shared.location.Taluka;
import demo.app.server.repository.TalukaRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class VillageTestCase {

    @Autowired
    private VillageRepository<Village> villageRepository;

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
            Country country = new Country();
            country.setCapital("Zv1swduDs68t3D1FNkNoVPGhRO1dEndr");
            country.setCapitalLatitude(8);
            country.setCapitalLongitude(5);
            country.setCountryCode1("8PC");
            country.setCountryCode2("L9p");
            country.setCountryFlag("55j3uS1zoCvSfDAUdA9BapyYIa10oXmvMkAgQIvQxwX3ucAEc8");
            country.setCountryName("Y1KZIsFp3AwwYTXe1hDaTGsDuT3lKUcrHVRAwplu6ur2T8iZbt");
            country.setCurrencyCode("nA5");
            country.setCurrencyName("HGDdLSZXMQjxvKTOUYRnRgpty5dB1btLefS0kLk7MOkqm5jmLi");
            country.setCurrencySymbol("MvhtmdrvCo3cDJkr2uWH77l8wpOBToiT");
            country.setIsoNumeric(9);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            District district = new District();
            district.setCode2("zTFev5O01TZXNABEXYy1VzdoyxdXp9BR");
            Region region = new Region();
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("yYkwVTb8aqvydc48vY72wHERqXqmXXqNupxYdrqRM9kC1FZKQR");
            state.setStateCapitalLatitude(4);
            state.setStateCapitalLongitude(3);
            state.setStateCode(1);
            state.setStateCodeChar2("FL4mqBozGBUgsSMrf5bNrkBzC3fqy71P");
            state.setStateCodeChar3("K3BRoiRojf03F3ZeUUb9iRdV0BgEx2bK");
            state.setStateDescription("lXJDsdJvJfovujUDRyVqUtN7Y6AGxyDtUWNmw6lXG2mDp4aE5N");
            state.setStateFlag("rxndixhRs5kcLax2mTugd2tQlBj9sQebIKurX5TOMOWbg8dXgZ");
            state.setStateName("U0SmaR32m3TSwyIXEI9PYrhbRlkAJQud5Ip6oftNyKOX3Oo59x");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            region.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            region.setRegionCode1(2);
            region.setRegionCodeChar2("SqHC2dRNZkU9fKLm6uVDMW3suriQN0t9");
            region.setRegionDescription("yxv1RvbZAWtmKB1nJtb6BFCrN0tJF9tC5pp28nFhdYrkNN44kW");
            region.setRegionFlag("L29tMA7wR7qINNFe3VaOcvho4im2Sprjx4HhXDcIp1rgEDq4hn");
            region.setRegionLatitude(6);
            region.setRegionLongitude(0);
            region.setRegionName("B2jLVUHPztJDlmDrwA4wMkPuk8QW5EZ7kfPaoB9p6tsyGs2z05");
            region.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            Region RegionTest = regionRepository.save(region);
            map.put("RegionPrimaryKey", region._getPrimarykey());
            district.setCode2("YatYIFhuaIWezl7pJDpaDWyuuZjlgHWf");
            district.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setDistrictDescription("ewJootdA6gJsuQ7YRkpD2rxL5yg3Ka87JqnhGPN2jkyAvuHHuG");
            district.setDistrictFlag("d6n1jTzjM7Eu2zC5xop9nC8DyaLGTTkP7fTGuIdI4VsDritSDV");
            district.setDistrictLatitude(1);
            district.setDistrictLongitude(8);
            district.setName("rBV1VUthj4YC223dzD8JVUdPtBlKjqewhQpr02j0AVzeA6LuQi");
            district.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            District DistrictTest = districtRepository.save(district);
            map.put("DistrictPrimaryKey", district._getPrimarykey());
            Taluka taluka = new Taluka();
            taluka.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setDistrictId((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setTalukaCode("LJB61Jmy2lhHXy19R0mEjERp6a6U6iKI");
            taluka.setTalukaDescription("C2JwcbRt4XlepZrq05rNSA5JMzWV9PSeRyiFQWQbn1obtpk4jF");
            taluka.setTalukaFlag("YdSzuGNxZGbXBkJH0JdZF3FNyqDe8J5gcqZG1tceHuFopL3nUR");
            taluka.setTalukaLatitude(4);
            taluka.setTalukaLongitude(11);
            taluka.setTalukaName("PDRIDWHW1pYCvYHxtrN70iagsBDN48WFaS9UBlSg1JW0kklbU0");
            Taluka TalukaTest = talukaRepository.save(taluka);
            map.put("TalukaPrimaryKey", taluka._getPrimarykey());
            Village village = new Village();
            village.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setDistrictId((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setTalukaaId((java.lang.String) TalukaTest._getPrimarykey());
            village.setVillageCode("XUOT9Fke2xEruLudg0SYMGSslnbiCJ4E");
            village.setVillageDescription("1Tos5Ug3asQUTcjl6zZehwO1GypDNjJHXjdxUVJmp6whKybnr7");
            village.setVillageFlag("jihICgpLd43LJapBtnhC3JCc34JrQocsZQI8IbgFawR9nhknNL");
            village.setVillageLatitude("oAklIKjhIgu");
            village.setVillageLongtitude(4);
            village.setVillageName("Qop4YdrGUC5frmA7QLcXaXrROVR7HZZJISuVojovfiwXI5OSuh");
            village.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            village.setEntityValidator(entityValidator);
            village.isValid();
            villageRepository.save(village);
            map.put("VillagePrimaryKey", village._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private DistrictRepository<District> districtRepository;

    @Autowired
    private RegionRepository<Region> regionRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private TalukaRepository<Taluka> talukaRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("VillagePrimaryKey"));
            Village village = villageRepository.findById((java.lang.String) map.get("VillagePrimaryKey"));
            village.setVersionId(1);
            village.setVillageCode("lgdHVtxceTa3w3Hux0g2PBPi35TVvQFZ");
            village.setVillageDescription("in2kvi3AyxYV0dEqqg7FVXE3gOQNW2GjEVAnDUHxMQT3fZIpjf");
            village.setVillageFlag("zGpFV772Hs98hJ6phqX9SAyVhwvaqameSvYZrlXOIpG3dXA2H1");
            village.setVillageLatitude("KAkh7Xv8lvc");
            village.setVillageLongtitude(8);
            village.setVillageName("V7BCPGRXe8oKYgoFmvFDdyjc62bkDiSz08ha0f4qKoZV8Vbhl4");
            village.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            villageRepository.update(village);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Village> listofcountryId = villageRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
    public void test3findBydistrictId() {
        try {
            java.util.List<Village> listofdistrictId = villageRepository.findByDistrictId((java.lang.String) map.get("DistrictPrimaryKey"));
            if (listofdistrictId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByregionId() {
        try {
            java.util.List<Village> listofregionId = villageRepository.findByRegionId((java.lang.String) map.get("RegionPrimaryKey"));
            if (listofregionId.size() == 0) {
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
            java.util.List<Village> listofstateId = villageRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
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
    public void test3findBytalukaaId() {
        try {
            java.util.List<Village> listoftalukaaId = villageRepository.findByTalukaaId((java.lang.String) map.get("TalukaPrimaryKey"));
            if (listoftalukaaId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("VillagePrimaryKey"));
            villageRepository.findById((java.lang.String) map.get("VillagePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("VillagePrimaryKey"));
            villageRepository.delete((java.lang.String) map.get("VillagePrimaryKey")); /* Deleting refrenced data */
            talukaRepository.delete((java.lang.String) map.get("TalukaPrimaryKey")); /* Deleting refrenced data */
            districtRepository.delete((java.lang.String) map.get("DistrictPrimaryKey")); /* Deleting refrenced data */
            regionRepository.delete((java.lang.String) map.get("RegionPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
