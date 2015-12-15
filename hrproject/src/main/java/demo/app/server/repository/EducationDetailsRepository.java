package demo.app.server.repository;
import com.athena.server.repository.SearchInterface;
import com.athena.annotation.Complexity;
import com.athena.annotation.SourceCodeAuthorClass;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import java.util.List;
import demo.app.shared.documentmanager.DocumentList;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;

@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "", versionNumber = "1", comments = "Repository for EducationDetails Transaction table", complexity = Complexity.MEDIUM)
public interface EducationDetailsRepository<T> extends SearchInterface {

    public List<T> findAll() throws SpartanPersistenceException;

    public T save(T entity) throws SpartanPersistenceException;

    public List<T> save(List<T> entity) throws SpartanPersistenceException;

    public void delete(String id) throws SpartanPersistenceException;

    public void deleteDocumentList(List<DocumentList> documentlist) throws SpartanPersistenceException;

    public void update(T entity) throws SpartanConstraintViolationException, SpartanPersistenceException;

    public void update(List<T> entity) throws SpartanPersistenceException;

    public List<T> findByEmpId(String empId) throws Exception, SpartanPersistenceException;

    public List<T> findByDegreeCode(String degreeCode) throws Exception, SpartanPersistenceException;

    public List<T> findByUnvCode(String unvCode) throws Exception, SpartanPersistenceException;

    public T findById(String eduPk) throws Exception, SpartanPersistenceException;
}
