package com.priyanga.appdevelopment.Repository;


import com.priyanga.appdevelopment.Entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TaskRepo extends JpaRepository<Task, Integer> {
    @Query(value = "SELECT * FROM task WHERE employee_id = ?1", nativeQuery = true)
    List<Task> getTaskByEmpId(int employeeId);
}
