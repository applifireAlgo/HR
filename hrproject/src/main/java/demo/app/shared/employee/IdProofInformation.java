package demo.app.shared.employee;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import demo.app.shared.EntityAudit;
import javax.persistence.Embedded;
import demo.app.shared.SystemInfo;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import java.lang.Override;
import javax.persistence.NamedQueries;

@Table(name = "ast_IdProofInformation_M")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "IdProofInformation.DefaultFinders", query = "select e from IdProofInformation e where e.systemInfo.activeStatus=1 and e.idDesc LIKE :idDesc and e.idHelp LIKE :idHelp"), @javax.persistence.NamedQuery(name = "IdProofInformation.findById", query = "select e from IdProofInformation e where e.systemInfo.activeStatus=1 and e.idCode =:idCode") })
public class IdProofInformation implements Serializable, CommonEntityInterface, Comparator<IdProofInformation> {

    @Column(name = "idDesc")
    @JsonProperty("idDesc")
    @NotNull
    @Size(min = 0, max = 256)
    private String idDesc;

    @Column(name = "idHelp")
    @JsonProperty("idHelp")
    @NotNull
    @Size(min = 0, max = 1024)
    private String idHelp;

    @Column(name = "idIcon")
    @JsonProperty("idIcon")
    private String idIcon;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "idCode")
    @JsonProperty("idCode")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 64)
    private String idCode;

    @Transient
    @JsonIgnore
    private EntityValidatorHelper<Object> entityValidator;

    @Version
    @Column(name = "versionId")
    @JsonProperty("versionId")
    private int versionId;

    @Embedded
    @JsonIgnore
    private EntityAudit entityAudit = new EntityAudit();

    @Embedded
    private SystemInfo systemInfo = new SystemInfo();

    @Transient
    private String primaryDisplay;

    public String getIdDesc() {
        return idDesc;
    }

    public void setIdDesc(String _idDesc) {
        if (_idDesc != null) {
            this.idDesc = _idDesc;
        }
    }

    public String getIdHelp() {
        return idHelp;
    }

    public void setIdHelp(String _idHelp) {
        if (_idHelp != null) {
            this.idHelp = _idHelp;
        }
    }

    public String getIdIcon() {
        return idIcon;
    }

    public void setIdIcon(String _idIcon) {
        this.idIcon = _idIcon;
    }

    public String getPrimaryKey() {
        return idCode;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return idCode;
    }

    public String getIdCode() {
        return idCode;
    }

    public void setIdCode(String _idCode) {
        this.idCode = _idCode;
    }

    public int getVersionId() {
        return versionId;
    }

    public void setVersionId(int _versionId) {
        this.versionId = _versionId;
    }

    public void setPrimaryDisplay(String _primaryDisplay) {
        this.primaryDisplay = _primaryDisplay;
    }

    public SystemInfo getSystemInfo() {
        return systemInfo;
    }

    public void setSystemInfo(SystemInfo _systemInfo) {
        this.systemInfo = _systemInfo;
    }

    @JsonIgnore
    public boolean isHardDelete() {
        if (this.systemInfo == null) {
            this.systemInfo = new SystemInfo();
        }
        if (this.systemInfo.getActiveStatus() == -1) {
            return true;
        } else {
            return false;
        }
    }

    @JsonIgnore
    @Override
    public boolean isValid() throws SpartanConstraintViolationException, SpartanIncorrectDataException {
        boolean isValid = false;
        if (this.entityValidator != null) {
            isValid = this.entityValidator.validateEntity(this);
        } else {
            throw new SpartanIncorrectDataException("Entity validator is not set");
        }
        return isValid;
    }

    @Override
    public void setEntityValidator(EntityValidatorHelper<Object> _validateFactory) {
        this.entityValidator = _validateFactory;
    }

    @Override
    public void setEntityAudit(int customerId, String userId, RECORD_TYPE recordType) {
        System.out.println("Setting logged in user info for " + recordType);
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (recordType == RECORD_TYPE.ADD) {
            this.entityAudit.setCreatedBy(userId);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
        setSystemInformation(recordType);
    }

    @Override
    public void setEntityAudit(int customerId, String userId) {
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (getPrimaryKey() == null) {
            this.entityAudit.setCreatedBy(userId);
            this.systemInfo.setActiveStatus(1);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
    }

    @JsonIgnore
    public String getLoggedInUserInfo() {
        String auditInfo = "";
        if (this.entityAudit != null) {
            auditInfo = entityAudit.toString();
        }
        return auditInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemInformation(RECORD_TYPE recordType) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        if (recordType == RECORD_TYPE.DELETE) {
            this.systemInfo.setActiveStatus(0);
        } else {
            this.systemInfo.setActiveStatus(1);
        }
    }

    @JsonIgnore
    public void setSystemInformation(Integer activeStatus) {
        this.systemInfo.setActiveStatus(activeStatus);
    }

    @JsonIgnore
    public String getSystemInformation() {
        String systemInfo = "";
        if (this.systemInfo != null) {
            systemInfo = systemInfo.toString();
        }
        return systemInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemTxnCode(Integer transactionAccessCode) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        this.systemInfo.setTxnAccessCode(transactionAccessCode);
    }

    @Override
    public int compare(IdProofInformation object1, IdProofInformation object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((idDesc == null ? " " : idDesc));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (idCode == null) {
            return super.hashCode();
        } else {
            return idCode.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            demo.app.shared.employee.IdProofInformation other = (demo.app.shared.employee.IdProofInformation) obj;
            if (idCode == null) {
                return false;
            } else if (!idCode.equals(other.idCode)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
