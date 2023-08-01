package com.priyanga.appdevelopment.Repository;

import com.priyanga.appdevelopment.Entity.Leaver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LeaverRepo extends JpaRepository<Leaver, Integer> {
    @Query(value = "SELECT * FROM leaver WHERE employee_id = ?1", nativeQuery = true)
    List<Leaver> getLeaveByEmpId(int employeeId);
}
