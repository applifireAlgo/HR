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

@Table(name = "ast_JobType_M")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "JobType.DefaultFinders", query = "select e from JobType e where e.systemInfo.activeStatus=1 and e.jobDesc LIKE :jobDesc and e.jobHelp LIKE :jobHelp"), @javax.persistence.NamedQuery(name = "JobType.findById", query = "select e from JobType e where e.systemInfo.activeStatus=1 and e.jobCode =:jobCode") })
public class JobType implements Serializable, CommonEntityInterface, Comparator<JobType> {

    @Column(name = "jobDesc")
    @JsonProperty("jobDesc")
    @NotNull
    @Size(min = 0, max = 256)
    private String jobDesc;

    @Column(name = "jobHelp")
    @JsonProperty("jobHelp")
    @NotNull
    @Size(min = 0, max = 1024)
    private String jobHelp;

    @Column(name = "jobIcon")
    @JsonProperty("jobIcon")
    private String jobIcon;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "jobCode")
    @JsonProperty("jobCode")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 64)
    private String jobCode;

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

    public String getJobDesc() {
        return jobDesc;
    }

    public void setJobDesc(String _jobDesc) {
        if (_jobDesc != null) {
            this.jobDesc = _jobDesc;
        }
    }

    public String getJobHelp() {
        return jobHelp;
    }

    public void setJobHelp(String _jobHelp) {
        if (_jobHelp != null) {
            this.jobHelp = _jobHelp;
        }
    }

    public String getJobIcon() {
        return jobIcon;
    }

    public void setJobIcon(String _jobIcon) {
        this.jobIcon = _jobIcon;
    }

    public String getPrimaryKey() {
        return jobCode;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return jobCode;
    }

    public String getJobCode() {
        return jobCode;
    }

    public void setJobCode(String _jobCode) {
        this.jobCode = _jobCode;
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
    public int compare(JobType object1, JobType object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((jobDesc == null ? " " : jobDesc));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (jobCode == null) {
            return super.hashCode();
        } else {
            return jobCode.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            demo.app.shared.employee.JobType other = (demo.app.shared.employee.JobType) obj;
            if (jobCode == null) {
                return false;
            } else if (!jobCode.equals(other.jobCode)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
