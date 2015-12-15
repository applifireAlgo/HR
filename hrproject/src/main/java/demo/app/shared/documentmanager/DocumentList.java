package demo.app.shared.documentmanager;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
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

@Table(name = "ast_DocumentList_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "DocumentList.DefaultFinders", query = "select e from DocumentList e where e.systemInfo.activeStatus=1 and e.docTypeCode LIKE :docTypeCode and e.docName LIKE :docName and e.docFile LIKE :docFile"), @javax.persistence.NamedQuery(name = "DocumentList.findByDocTypeCode", query = "select e from DocumentList e where e.systemInfo.activeStatus=1 and e.docTypeCode=:docTypeCode"), @javax.persistence.NamedQuery(name = "DocumentList.findById", query = "select e from DocumentList e where e.systemInfo.activeStatus=1 and e.docId =:docId") })
public class DocumentList implements Serializable, CommonEntityInterface, Comparator<DocumentList> {

    @Column(name = "docName")
    @JsonProperty("docName")
    @NotNull
    @Size(min = 0, max = 512)
    private String docName;

    @Column(name = "docFile")
    @JsonProperty("docFile")
    @NotNull
    @Size(min = 0, max = 128)
    private String docFile;

    @Column(name = "docDesc")
    @JsonProperty("docDesc")
    @Size(min = 0, max = 1024)
    private String docDesc;

    @Column(name = "docDate")
    @JsonProperty("docDate")
    private Timestamp docDate;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "docId")
    @JsonProperty("docId")
    @GeneratedValue(generator = "UUIDGenerator")
    @Size(min = 0, max = 64)
    private String docId;

    @Column(name = "docTypeCode")
    @JsonProperty("docTypeCode")
    private String docTypeCode;

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

    public String getDocName() {
        return docName;
    }

    public void setDocName(String _docName) {
        if (_docName != null) {
            this.docName = _docName;
        }
    }

    public String getDocFile() {
        return docFile;
    }

    public void setDocFile(String _docFile) {
        if (_docFile != null) {
            this.docFile = _docFile;
        }
    }

    public String getDocDesc() {
        return docDesc;
    }

    public void setDocDesc(String _docDesc) {
        this.docDesc = _docDesc;
    }

    public Timestamp getDocDate() {
        return docDate;
    }

    public void setDocDate(Timestamp _docDate) {
        this.docDate = _docDate;
    }

    public String getPrimaryKey() {
        return docId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return docId;
    }

    public String getDocId() {
        return docId;
    }

    public void setDocId(String _docId) {
        this.docId = _docId;
    }

    public String getDocTypeCode() {
        return docTypeCode;
    }

    public void setDocTypeCode(String _docTypeCode) {
        this.docTypeCode = _docTypeCode;
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
    public int compare(DocumentList object1, DocumentList object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((docTypeCode.toString() == null ? " " : docTypeCode.toString()) + ",");
        sb.append((docName == null ? " " : docName));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (docId == null) {
            return super.hashCode();
        } else {
            return docId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            demo.app.shared.documentmanager.DocumentList other = (demo.app.shared.documentmanager.DocumentList) obj;
            if (docId == null) {
                return false;
            } else if (!docId.equals(other.docId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
