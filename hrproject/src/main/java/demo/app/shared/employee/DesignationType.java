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

@Table(name = "ast_DesignationType_M")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "DesignationType.DefaultFinders", query = "select e from DesignationType e where e.systemInfo.activeStatus=1 and e.designatnTypeDesc LIKE :designatnTypeDesc and e.designatnTypeHelp LIKE :designatnTypeHelp"), @javax.persistence.NamedQuery(name = "DesignationType.findById", query = "select e from DesignationType e where e.systemInfo.activeStatus=1 and e.designatnTypeCode =:designatnTypeCode") })
public class DesignationType implements Serializable, CommonEntityInterface, Comparator<DesignationType> {

    @Column(name = "designatnTypeDesc")
    @JsonProperty("designatnTypeDesc")
    @NotNull
    @Size(min = 0, max = 256)
    private String designatnTypeDesc;

    @Column(name = "designatnTypeHelp")
    @JsonProperty("designatnTypeHelp")
    @NotNull
    @Size(min = 0, max = 1024)
    private String designatnTypeHelp;

    @Column(name = "designatnTypeIcon")
    @JsonProperty("designatnTypeIcon")
    private String designatnTypeIcon;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "designatnTypeCode")
    @JsonProperty("designatnTypeCode")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 64)
    private String designatnTypeCode;

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

    public String getDesignatnTypeDesc() {
        return designatnTypeDesc;
    }

    public void setDesignatnTypeDesc(String _designatnTypeDesc) {
        if (_designatnTypeDesc != null) {
            this.designatnTypeDesc = _designatnTypeDesc;
        }
    }

    public String getDesignatnTypeHelp() {
        return designatnTypeHelp;
    }

    public void setDesignatnTypeHelp(String _designatnTypeHelp) {
        if (_designatnTypeHelp != null) {
            this.designatnTypeHelp = _designatnTypeHelp;
        }
    }

    public String getDesignatnTypeIcon() {
        return designatnTypeIcon;
    }

    public void setDesignatnTypeIcon(String _designatnTypeIcon) {
        this.designatnTypeIcon = _designatnTypeIcon;
    }

    public String getPrimaryKey() {
        return designatnTypeCode;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return designatnTypeCode;
    }

    public String getDesignatnTypeCode() {
        return designatnTypeCode;
    }

    public void setDesignatnTypeCode(String _designatnTypeCode) {
        this.designatnTypeCode = _designatnTypeCode;
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
    public int compare(DesignationType object1, DesignationType object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((designatnTypeDesc == null ? " " : designatnTypeDesc));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (designatnTypeCode == null) {
            return super.hashCode();
        } else {
            return designatnTypeCode.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            demo.app.shared.employee.DesignationType other = (demo.app.shared.employee.DesignationType) obj;
            if (designatnTypeCode == null) {
                return false;
            } else if (!designatnTypeCode.equals(other.designatnTypeCode)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
