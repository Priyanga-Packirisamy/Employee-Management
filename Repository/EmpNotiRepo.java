package com.priyanga.appdevelopment.Repository;


import com.priyanga.appdevelopment.Entity.EmployeeNotification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpNotiRepo extends JpaRepository<EmployeeNotification, Integer> {

}
