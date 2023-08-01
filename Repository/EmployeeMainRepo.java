package com.priyanga.appdevelopment.Repository;

import com.priyanga.appdevelopment.Entity.EmployeeMain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeMainRepo extends JpaRepository<EmployeeMain, Integer> {

    @Query(value = "SELECT e.employee_id, pd.first_name, pr.manager_name, " +
            "pr.position, pr.dept_name, pr.office " +
            "FROM employee_main e " +
            "JOIN personal_detail pd ON e.fpersonalid = pd.personal_id " +
            "JOIN professional_detail pr ON e.fprofessional = pr.professional_id", nativeQuery = true)
    List<Object[]> getEmployeeDetails();

    @Query(value = "SELECT e.employee_id, pd.first_name, pr.manager_name, " +
            "pr.position, pr.dept_name, pr.office " +
            "FROM employee_main e " +
            "JOIN personal_detail pd ON e.fpersonalid = pd.personal_id " +
            "JOIN professional_detail pr ON e.fprofessional = pr.professional_id where pr.dept_id = ?1", nativeQuery = true)
    List<Object[]> getEmployeeDetailsDept(int id);

    @Query(value = "SELECT * FROM employee_main em " +
            "JOIN professional_detail pd ON em.fprofessional = pd.professional_id " +
            "WHERE pd.dept_id = (SELECT dept_id FROM professional_detail WHERE professional_id = :employeeId)", nativeQuery = true)
    List<EmployeeMain> sameDepartment(int employeeId);
}
