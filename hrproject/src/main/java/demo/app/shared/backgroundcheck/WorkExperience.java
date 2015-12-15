package demo.app.shared.backgroundcheck;
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
import demo.app.shared.documentmanager.DocumentList;
import java.util.List;
import javax.persistence.JoinTable;
import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
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

@Table(name = "ast_WorkExperience_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "WorkExperience.DefaultFinders", query = "select e from WorkExperience e where e.systemInfo.activeStatus=1 and e.empId LIKE :empId and e.previousCompany LIKE :previousCompany and e.duration LIKE :duration and e.immediateSupervisor LIKE :immediateSupervisor and e.supervisorContactNo LIKE :supervisorContactNo and e.worknResponsibilities LIKE :worknResponsibilities and e.jobTitle LIKE :jobTitle and e.reasonForLeaving LIKE :reasonForLeaving and e.salaryPerAanum LIKE :salaryPerAanum"), @javax.persistence.NamedQuery(name = "WorkExperience.findByEmpId", query = "select e from WorkExperience e where e.systemInfo.activeStatus=1 and e.empId=:empId"), @javax.persistence.NamedQuery(name = "WorkExperience.findById", query = "select e from WorkExperience e where e.systemInfo.activeStatus=1 and e.workPk =:workPk") })
public class WorkExperience implements Serializable, CommonEntityInterface, Comparator<WorkExperience> {

    @Column(name = "previousCompany")
    @JsonProperty("previousCompany")
    @NotNull
    @Size(min = 0, max = 256)
    private String previousCompany;

    @Column(name = "duration")
    @JsonProperty("duration")
    @NotNull
    @Size(min = 0, max = 128)
    private String duration;

    @Column(name = "immediateSupervisor")
    @JsonProperty("immediateSupervisor")
    @NotNull
    @Size(min = 0, max = 128)
    private String immediateSupervisor;

    @Column(name = "supervisorContactNo")
    @JsonProperty("supervisorContactNo")
    @NotNull
    @Size(min = 0, max = 10)
    private String supervisorContactNo;

    @Column(name = "worknResponsibilities")
    @JsonProperty("worknResponsibilities")
    @NotNull
    @Size(min = 0, max = 1024)
    private String worknResponsibilities;

    @Column(name = "jobTitle")
    @JsonProperty("jobTitle")
    @NotNull
    @Size(min = 0, max = 128)
    private String jobTitle;

    @Column(name = "reasonForLeaving")
    @JsonProperty("reasonForLeaving")
    @NotNull
    @Size(min = 0, max = 1024)
    private String reasonForLeaving;

    @Column(name = "salaryPerAanum")
    @JsonProperty("salaryPerAanum")
    @NotNull
    @Size(min = 0, max = 128)
    private String salaryPerAanum;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "workPk")
    @JsonProperty("workPk")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 64)
    private String workPk;

    @Column(name = "empId")
    @JsonProperty("empId")
    private String empId;

    @JoinTable(name = "ast_WorkExpDoc_B", joinColumns = { @javax.persistence.JoinColumn(name = "workPk", referencedColumnName = "workPk") }, inverseJoinColumns = { @javax.persistence.JoinColumn(name = "docId", referencedColumnName = "docId") })
    @OneToMany(cascade = CascadeType.ALL)
    private List<DocumentList> documentList;

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

    public String getPreviousCompany() {
        return previousCompany;
    }

    public void setPreviousCompany(String _previousCompany) {
        if (_previousCompany != null) {
            this.previousCompany = _previousCompany;
        }
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String _duration) {
        if (_duration != null) {
            this.duration = _duration;
        }
    }

    public String getImmediateSupervisor() {
        return immediateSupervisor;
    }

    public void setImmediateSupervisor(String _immediateSupervisor) {
        if (_immediateSupervisor != null) {
            this.immediateSupervisor = _immediateSupervisor;
        }
    }

    public String getSupervisorContactNo() {
        return supervisorContactNo;
    }

    public void setSupervisorContactNo(String _supervisorContactNo) {
        if (_supervisorContactNo != null) {
            this.supervisorContactNo = _supervisorContactNo;
        }
    }

    public String getWorknResponsibilities() {
        return worknResponsibilities;
    }

    public void setWorknResponsibilities(String _worknResponsibilities) {
        if (_worknResponsibilities != null) {
            this.worknResponsibilities = _worknResponsibilities;
        }
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String _jobTitle) {
        if (_jobTitle != null) {
            this.jobTitle = _jobTitle;
        }
    }

    public String getReasonForLeaving() {
        return reasonForLeaving;
    }

    public void setReasonForLeaving(String _reasonForLeaving) {
        if (_reasonForLeaving != null) {
            this.reasonForLeaving = _reasonForLeaving;
        }
    }

    public String getSalaryPerAanum() {
        return salaryPerAanum;
    }

    public void setSalaryPerAanum(String _salaryPerAanum) {
        if (_salaryPerAanum != null) {
            this.salaryPerAanum = _salaryPerAanum;
        }
    }

    public String getPrimaryKey() {
        return workPk;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return workPk;
    }

    public String getWorkPk() {
        return workPk;
    }

    public void setWorkPk(String _workPk) {
        this.workPk = _workPk;
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String _empId) {
        this.empId = _empId;
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

    public WorkExperience addDocumentList(DocumentList _documentList) {
        if (this.documentList == null) {
            this.documentList = new java.util.ArrayList<demo.app.shared.documentmanager.DocumentList>();
        }
        if (_documentList != null) {
            this.documentList.add(_documentList);
        }
        return this;
    }

    public WorkExperience removeDocumentList(DocumentList _documentList) {
        if (this.documentList != null) {
            this.documentList.remove(_documentList);
        }
        return this;
    }

    public WorkExperience addAllDocumentList(List<DocumentList> _documentList) {
        if (this.documentList == null) {
            this.documentList = new java.util.ArrayList<demo.app.shared.documentmanager.DocumentList>();
        }
        if (_documentList != null) {
            this.documentList.addAll(_documentList);
        }
        return this;
    }

    @JsonIgnore
    public Integer sizeOfDocumentList() {
        if (this.documentList != null) {
            return this.documentList.size();
        }
        return 0;
    }

    public List<DocumentList> getDocumentList() {
        return documentList;
    }

    public void setDocumentList(List<DocumentList> _documentList) {
        this.documentList = _documentList;
    }

    @JsonIgnore
    public List<DocumentList> getDeletedDocumentListList() {
        List<DocumentList> documentlistToRemove = new java.util.ArrayList<DocumentList>();
        for (DocumentList _documentlist : documentList) {
            if (_documentlist.isHardDelete()) {
                documentlistToRemove.add(_documentlist);
            }
        }
        documentList.removeAll(documentlistToRemove);
        return documentlistToRemove;
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
        setValidatordocumentList(_validateFactory);
    }

    private void setValidatordocumentList(EntityValidatorHelper<Object> _validateFactory) {
        for (int i = 0; i < documentList.size(); i++) {
            documentList.get(i).setEntityValidator(_validateFactory);
        }
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
        if (this.documentList == null) {
            this.documentList = new java.util.ArrayList<DocumentList>();
        }
        for (DocumentList _documentList : documentList) {
            _documentList.setEntityAudit(customerId, userId, recordType);
            _documentList.setSystemInformation(recordType);
        }
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
        if (this.documentList == null) {
            this.documentList = new java.util.ArrayList<DocumentList>();
        }
        for (DocumentList _documentList : documentList) {
            _documentList.setEntityAudit(customerId, userId);
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
            this.systemInfo.setActiveStatus(-1);
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
    public int compare(WorkExperience object1, WorkExperience object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((empId.toString() == null ? " " : empId.toString()) + ",");
        sb.append((previousCompany == null ? " " : previousCompany) + ",");
        sb.append((duration == null ? " " : duration) + ",");
        sb.append((immediateSupervisor == null ? " " : immediateSupervisor) + ",");
        sb.append((supervisorContactNo == null ? " " : supervisorContactNo) + ",");
        sb.append((worknResponsibilities == null ? " " : worknResponsibilities) + ",");
        sb.append((jobTitle == null ? " " : jobTitle) + ",");
        sb.append((reasonForLeaving == null ? " " : reasonForLeaving) + ",");
        sb.append((salaryPerAanum == null ? " " : salaryPerAanum));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (workPk == null) {
            return super.hashCode();
        } else {
            return workPk.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            demo.app.shared.backgroundcheck.WorkExperience other = (demo.app.shared.backgroundcheck.WorkExperience) obj;
            if (workPk == null) {
                return false;
            } else if (!workPk.equals(other.workPk)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
