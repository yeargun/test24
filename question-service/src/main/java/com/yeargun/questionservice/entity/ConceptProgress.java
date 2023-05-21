package com.yeargun.questionservice.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="ConceptProgress")
public class ConceptProgress {
    @Id
    @GeneratedValue
    private Integer id;

    // mysql decimal
    // man use jdbc procedures etc then :/ f
    private int progress;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "tag_id")
    private Set<Tag> tag;

    private int answer;


}
