package demo.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import demo.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import demo.app.server.repository.TalukaRepository;
import demo.app.shared.location.Taluka;
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

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class TalukaTestCase {

    @Autowired
    private TalukaRepository<Taluka> talukaRepository;

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
            country.setCapital("xbwKIwUWRskNTcehQn9OKLE6uDzm4Awd");
            country.setCapitalLatitude(0);
            country.setCapitalLongitude(9);
            country.setCountryCode1("5HB");
            country.setCountryCode2("ycz");
            country.setCountryFlag("c9pyEGYiyJmUHYgsJhkJUj1mtzef7whHTw3jOdXSFdZJXopjFx");
            country.setCountryName("7DA6ek7iQUz1FwMnna3DUd5I0mInBV8BmxPMasLA0TDn7Tl5e2");
            country.setCurrencyCode("LXZ");
            country.setCurrencyName("gFLcgbbYW24PGLb02lenm359rjAhx2zYUT7Bo3cMCPlltj1vvk");
            country.setCurrencySymbol("PZ2UXhEsgkQlo7jQ3v4qi04ZKrSro8ZS");
            country.setIsoNumeric(9);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            District district = new District();
            district.setCode2("OpkgEwVmobO9CUZe8BVjNy4C2TQ1UZYy");
            Region region = new Region();
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("nJ6PGWDr1zwUHoewx3mzFNtnFDTg0KpcHoTAY7mxB0cB8d2yvr");
            state.setStateCapitalLatitude(9);
            state.setStateCapitalLongitude(11);
            state.setStateCode(0);
            state.setStateCodeChar2("yc2UcCgTh7pD0IZThLKmyxpfSw83P99h");
            state.setStateCodeChar3("RA3dPiuqzISpSlvLp4o1gKcpkBYabWl6");
            state.setStateDescription("MU3VVtsaXYuVQ8rCZtQ1Mn6ZLOIwpGRwA3dI9ORfzcK7BMGq3r");
            state.setStateFlag("oP7PymQFzpkum3RtRx1edvltRJ7Eb7OUhBOyrzpIEw696SxePp");
            state.setStateName("da3EGu3O7Y2sujaNH797szuoYSZMuqKKWp7BjR9Jy50Qc6Fdfq");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            region.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            region.setRegionCode1(0);
            region.setRegionCodeChar2("IrItyt6eIuq5diCSkldNm5KlNOTYa0jj");
            region.setRegionDescription("tynR8yQrRw6FVDhgPdYddGFQsOE0aFWd9JWP2pCBio4eVwYDmR");
            region.setRegionFlag("dVfAnGzt1BsXUr0p2GBNsDOBCYMH5ZFRazFXQe3mOEyJu86aI9");
            region.setRegionLatitude(4);
            region.setRegionLongitude(9);
            region.setRegionName("C0eeSlZSSTIKgOuoCFGjYMjzqON4GBYGbUU6CfiZg2DqwXQpQI");
            region.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            Region RegionTest = regionRepository.save(region);
            map.put("RegionPrimaryKey", region._getPrimarykey());
            district.setCode2("ib7f8zdbzfWxWxfVeauCg9mAhHiWLYvM");
            district.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setDistrictDescription("oMTwgYZHrr43kNd3gQEajxjF3KBhZJWS3pzGBVJoepuYna1GRd");
            district.setDistrictFlag("mO0Sb9WPx7NSDIRNuiTuHPWOWYAKKWl8kQRVacUSlD1jXUXBM3");
            district.setDistrictLatitude(6);
            district.setDistrictLongitude(6);
            district.setName("ICtIqPHCdQv3DUwJEuley1cmRQICMtMUrWakpgRE6TpZX1pzLO");
            district.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            District DistrictTest = districtRepository.save(district);
            map.put("DistrictPrimaryKey", district._getPrimarykey());
            Taluka taluka = new Taluka();
            taluka.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setDistrictId((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setStateId((java.lang.String) StateTest._getPrimarykey());
            taluka.setTalukaCode("65pyYt1MhS2bawe4Ui1OkxgTbJKbmr9v");
            taluka.setTalukaDescription("GUeHmd6QCvSF1Ab2Azwxjq94DdukabNHtFWhhUBrKMqizpbOul");
            taluka.setTalukaFlag("fBPyivBJyiFQIi2CcWSuKuHVWYNLyFTfTmi2xIt7C9Z8FQNejt");
            taluka.setTalukaLatitude(2);
            taluka.setTalukaLongitude(8);
            taluka.setTalukaName("ihDvMfBnNPwtrnifbpOXNlhWG2Omm132Q2hwBe5ikXllUhGOh2");
            taluka.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            taluka.setEntityValidator(entityValidator);
            taluka.isValid();
            talukaRepository.save(taluka);
            map.put("TalukaPrimaryKey", taluka._getPrimarykey());
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

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("TalukaPrimaryKey"));
            Taluka taluka = talukaRepository.findById((java.lang.String) map.get("TalukaPrimaryKey"));
            taluka.setTalukaCode("JddX0rhzAzZ9umImMOQ6zmj3lrZGtKLL");
            taluka.setTalukaDescription("srf3P2YLO6V5MthXinhxpPv1RWBCF3wa3EzfiaQ3oeoGC7CFQ4");
            taluka.setTalukaFlag("Iqr4KQ58cJjJJagzdtFxECruGCdcc89WegabnZvkLY8uylp3CQ");
            taluka.setTalukaLatitude(5);
            taluka.setTalukaLongitude(5);
            taluka.setTalukaName("SUnyUfxd0IgIaRbHE0IbmYYe4k2gvJyRoU27QUl8lX75okxGz6");
            taluka.setVersionId(1);
            taluka.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            talukaRepository.update(taluka);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Taluka> listofcountryId = talukaRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
            java.util.List<Taluka> listofdistrictId = talukaRepository.findByDistrictId((java.lang.String) map.get("DistrictPrimaryKey"));
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
            java.util.List<Taluka> listofregionId = talukaRepository.findByRegionId((java.lang.String) map.get("RegionPrimaryKey"));
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
            java.util.List<Taluka> listofstateId = talukaRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
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
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("TalukaPrimaryKey"));
            talukaRepository.findById((java.lang.String) map.get("TalukaPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("TalukaPrimaryKey"));
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
