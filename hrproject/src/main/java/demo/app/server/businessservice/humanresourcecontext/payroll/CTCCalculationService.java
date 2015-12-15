package demo.app.server.businessservice.humanresourcecontext.payroll;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.ruleengine.server.bzservice.RuleEngineInterface;
import com.spartan.shield.sessionService.SessionDataMgtService;
import demo.app.server.repository.CostToCompanyRepository;
import demo.app.server.repository.SalaryStructureFinancialWiseRepository;
import demo.app.shared.payroll.CostToCompany;
import demo.app.shared.payroll.SalaryStructureFinancialWise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;

@Component
public class CTCCalculationService {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private CostToCompanyRepository<CostToCompany> costToCompanyRepository;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    @Autowired
    private SalaryStructureFinancialWiseRepository<SalaryStructureFinancialWise> salaryStructureFinancialWiseRepository;

    public CostToCompany process(CostToCompany ctc) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        demo.app.shared.payroll.CostToCompany costtocompany_3 = null;
        try {
            ruleEngineInterface.initialize("cc9eeed6-2501-4370-98b5-51f98605375a");
            ruleEngineInterface.add(runtimeLogInfoHelper);
            ruleEngineInterface.add(ctc);
            ruleEngineInterface.executeRule();
            costtocompany_3 = costToCompanyRepository.save((demo.app.shared.payroll.CostToCompany) ruleEngineInterface.getResult("ctc"));
            if ((demo.app.shared.payroll.SalaryStructureFinancialWise) ruleEngineInterface.getResult("salarystructurefinancialwise_2") == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            demo.app.shared.payroll.SalaryStructureFinancialWise salarystructurefinancialwise_4 = salaryStructureFinancialWiseRepository.save((demo.app.shared.payroll.SalaryStructureFinancialWise) ruleEngineInterface.getResult("salarystructurefinancialwise_2"));
            return costtocompany_3;
        } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
