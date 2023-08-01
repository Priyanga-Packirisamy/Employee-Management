package com.priyanga.appdevelopment.Repository;

import com.priyanga.appdevelopment.Entity.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MeetingRepo extends JpaRepository<Meeting, Integer> {
    @Query(value = "SELECT * FROM meeting where dept_id = ( select dept_id from professional_detail where professional_id = ?1)", nativeQuery = true)
    List<Meeting> getMeetByEmpId(int employeeId);
}
