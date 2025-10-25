package com.wam.projimmo;

import com.wam.projimmo.entities.Region;
import com.wam.projimmo.repositories.RegionRepository;
import com.wam.projimmo.services.RegionService;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class RegionServiceTest {

    @Test
    public void testSearchAllRegions_returnList() {
        RegionRepository mockRepo = mock(RegionRepository.class);
        RegionService regionService = new RegionService(mockRepo);

        List<Region> regionList = new ArrayList<>();
        regionList.add(new Region());

        when(mockRepo.findAll()).thenReturn(regionList);
        List<Region> result = regionService.searchAllRegions();
        assertEquals(regionList, result);
    }


}
