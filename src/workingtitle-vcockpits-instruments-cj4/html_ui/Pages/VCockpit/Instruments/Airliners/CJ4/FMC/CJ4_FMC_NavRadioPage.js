class CJ4_FMC_NavRadioPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        let vhf1FrequencyCell = "[]";
        if (fmc.vhf1Frequency > 0) {
            vhf1FrequencyCell = fmc.vhf1Frequency.toFixed(3);
        }
        fmc.onLeftInput[0] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            console.log(numValue);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 118 && numValue <= 136.9 && RadioNav.isHz833Compliant(numValue)) {
                fmc.vhf1Frequency = numValue;
                fmc.radioNav.setVHFStandbyFrequency(fmc.instrumentIndex, 1, numValue).then(() => {
                    fmc.radioNav.swapVHFFrequencies(fmc.instrumentIndex, 1);
                    requestAnimationFrame(() => {
                        CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                    });
                });
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.vhf1Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage1(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        let vhf2FrequencyCell = "[]";
        if (fmc.vhf2Frequency > 0) {
            vhf2FrequencyCell = fmc.vhf2Frequency.toFixed(3);
        }
        fmc.onRightInput[0] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 118 && numValue <= 136.9 && RadioNav.isHz833Compliant(numValue)) {
                fmc.vhf2Frequency = numValue;
                fmc.radioNav.setVHFStandbyFrequency(fmc.instrumentIndex, 2, numValue).then(() => {
                    fmc.radioNav.swapVHFFrequencies(fmc.instrumentIndex, 2);
                    requestAnimationFrame(() => {
                        CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                    });
                });
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.vhf2Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage1(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        let rcl1FrequencyCell = "121.900";
        if (fmc.rcl1Frequency > 0) {
            rcl1FrequencyCell = fmc.rcl1Frequency.toFixed(3);
        }
        fmc.onLeftInput[1] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 118 && numValue <= 136.9 && RadioNav.isHz833Compliant(numValue)) {
                fmc.rcl1Frequency = numValue;
                requestAnimationFrame(() => {
                    CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                });
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.rcl1Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage1(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        let pre2FrequencyCell = "121.500";
        if (fmc.pre2Frequency > 0) {
            pre2FrequencyCell = fmc.pre2Frequency.toFixed(3);
        }
        fmc.onRightInput[1] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 118 && numValue <= 136.9 && RadioNav.isHz833Compliant(numValue)) {
                fmc.pre2Frequency = numValue;
                requestAnimationFrame(() => {
                    CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                });
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.pre2Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage1(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        let vor1FrequencyCell = "110.40";
        if (fmc.vor1Frequency > 0) {
            vor1FrequencyCell = fmc.vor1Frequency.toFixed(2);
        }
        fmc.onLeftInput[2] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 108 && numValue <= 117.95 && RadioNav.isHz50Compliant(numValue)) {
                fmc.vor1Frequency = numValue;
                if (fmc.isRadioNavActive()) {
                    requestAnimationFrame(() => {
                        CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                    });
                }
                else {
                    fmc.radioNav.setVORStandbyFrequency(1, numValue).then(() => {
                        fmc.radioNav.swapVORFrequencies(1);
                        requestAnimationFrame(() => {
                            CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                        });
                    });
                }
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.vor1Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage1(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        let vor2FrequencyCell = "111.10";
        if (fmc.vor2Frequency > 0) {
            vor2FrequencyCell = fmc.vor2Frequency.toFixed(2);
        }
        fmc.onRightInput[2] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 108 && numValue <= 117.95 && RadioNav.isHz50Compliant(numValue)) {
                fmc.vor2Frequency = numValue;
                if (fmc.isRadioNavActive()) {
                    requestAnimationFrame(() => {
                        CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                    });
                }
                else {
                    fmc.radioNav.setVORStandbyFrequency(2, numValue).then(() => {
                        fmc.radioNav.swapVORFrequencies(2);
                        requestAnimationFrame(() => {
                            CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                        });
                    });
                }
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.vor2Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage1(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        let adfFrequencyCell = "[]";
        if (fmc.adf1Frequency > 0) {
            adfFrequencyCell = fmc.adf1Frequency.toFixed(0);
        }
        fmc.onLeftInput[5] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 100 && numValue <= 1799) {
                fmc.adf1Frequency = numValue;
                if (fmc.isRadioNavActive()) {
                    requestAnimationFrame(() => {
                        CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                    });
                }
                else {
                    fmc.radioNav.setADFActiveFrequency(1, numValue).then(() => {
                        requestAnimationFrame(() => {
                            CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                        });
                    });
                }
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.adf1Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage1(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        let atc1FrequencyCell = "[]";
        if (fmc.atc1Frequency > 0) {
            atc1FrequencyCell = fmc.atc1Frequency.toFixed(0).padStart(4, "0");
        }
        fmc.onLeftInput[4] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && RadioNav.isXPDRCompliant(numValue)) {
                fmc.atc1Frequency = numValue;
                if (fmc.isRadioNavActive()) {
                    requestAnimationFrame(() => {
                        CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                    });
                }
                else {
                    SimVar.SetSimVarValue("K:XPNDR_SET", "Frequency BCD16", Avionics.Utils.make_xpndr_bcd16(numValue)).then(() => {
                        requestAnimationFrame(() => {
                            CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                        });
                    });
                }
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.atc1Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage1(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        fmc.setTemplate([
            ["TUNE[color]blue", "1" + "[color]blue", "2" + "[color]blue"],
            ["COM1", "COM2"],
            [vhf1FrequencyCell + "[color]green", vhf2FrequencyCell + "[color]green"],
            ["RECALL", "RECALL"],
            [rcl1FrequencyCell + "", pre2FrequencyCell + ""],
            ["NAV 1", "NAV 2"],
            [vor1FrequencyCell + "[color]green", vor2FrequencyCell + "[color]green"],
            ["DME1", "DME2"],
            ["HOLD", "HOLD"],
            ["ATC1", "TCAS MODE"],
            [atc1FrequencyCell + "[color]green", "TA/RA/STBY"],
            ["ADF", "REL[color]blue"],
            [adfFrequencyCell + "[color]green", "TCAS>"],
        ]);
		fmc.onRightInput[5] = () => { CJ4_FMC_NavRadioPage.ShowPage3(fmc); };
        fmc.onPrevPage = () => { CJ4_FMC_NavRadioPage.ShowPage2(fmc); };
        fmc.onNextPage = () => { CJ4_FMC_NavRadioPage.ShowPage2(fmc); };
        fmc.updateSideButtonActiveStatus();
    }
    static ShowPage2(fmc) {
        fmc.clearDisplay();
        let adf1FrequencyCell = "[]";
        if (fmc.adf1Frequency > 0) {
            adf1FrequencyCell = fmc.adf1Frequency.toFixed(0);
        }
        fmc.onLeftInput[2] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 100 && numValue <= 1799) {
                fmc.adf1Frequency = numValue;
                if (fmc.isRadioNavActive()) {
                    requestAnimationFrame(() => {
                        CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                    });
                }
                else {
                    fmc.radioNav.setADFActiveFrequency(1, numValue).then(() => {
                        requestAnimationFrame(() => {
                            CJ4_FMC_NavRadioPage.ShowPage2(fmc);
                        });
                    });
                }
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.adf1Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage2(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        let adf2FrequencyCell = "[]";
        if (fmc.adf2Frequency > 0) {
            adf2FrequencyCell = fmc.adf2Frequency.toFixed(0);
        }
        fmc.onRightInput[2] = () => {
            let value = fmc.inOut;
            let numValue = parseFloat(value);
            fmc.clearUserInput();
            if (isFinite(numValue) && numValue >= 100 && numValue <= 1799) {
                fmc.adf2Frequency = numValue;
                if (fmc.isRadioNavActive()) {
                    requestAnimationFrame(() => {
                        CJ4_FMC_NavRadioPage.ShowPage1(fmc);
                    });
                }
                else {
                    fmc.radioNav.setADFActiveFrequency(2, numValue).then(() => {
                        requestAnimationFrame(() => {
                            CJ4_FMC_NavRadioPage.ShowPage2(fmc);
                        });
                    });
                }
            }
            else if (value === FMCMainDisplay.clrValue) {
                fmc.adf2Frequency = 0;
                CJ4_FMC_NavRadioPage.ShowPage2(fmc);
            }
            else {
                fmc.showErrorMessage("INVALID ENTRY");
            }
        };
        fmc.setTemplate([
            ["TUNE", "2", "2"],
            ["", "FLIGHT ID"],
            ["", "N5DX29"],
            [""],
            [""],
            ["ADF 1", "ADF 2"],
            [adf1FrequencyCell + "[color]green", adf2FrequencyCell + "[color]green"],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""]
        ]);
        fmc.onPrevPage = () => {
            CJ4_FMC_NavRadioPage.ShowPage1(fmc);
        };
        fmc.onNextPage = () => {
            CJ4_FMC_NavRadioPage.ShowPage1(fmc);
        };
        fmc.updateSideButtonActiveStatus();
    }
	static ShowPage3(fmc) {
        fmc.clearDisplay();
		fmc.setTemplate([
            ["TCAS CONTROL[color]blue"],
            ["MODE", "ALT TAG"],
            ["TA/RA/STBY", "REL/ABS"],
            [""],
            ["", "TEST44"],
            ["&#x25C7TRAFFIC", "EXT TEST"],
            ["ON/OFF", "ON/OFF"],
            ["", "ALT LIMITS"],
			["", "ABOVE"],
            [""],
            ["", "NORM"],
            [""],
            ["", "BELOW"]
        ]);
		fmc.updateSideButtonActiveStatus();
	}
}
//# sourceMappingURL=CJ4_FMC_NavRadioPage.js.map