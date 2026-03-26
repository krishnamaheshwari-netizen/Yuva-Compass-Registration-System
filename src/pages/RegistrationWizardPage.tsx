import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { MultiSelect } from '../components/ui/MultiSelect';
import { FrappeForm, FrappeSection } from '../components/frappe/FrappeForm';
import { FrappeField } from '../components/frappe/FrappeField';
import { FrappeFormTabs } from '../components/frappe/FrappeFormTabs';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
import { Search, Save, AlertTriangle, ArrowRight } from 'lucide-react';
export function RegistrationWizardPage() {
  const [step, setStep] = useState(0);
  const [registrationSource, setRegistrationSource] = useState<
    'lead' | 'direct' | null>(
    null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [showEmailSkipModal, setShowEmailSkipModal] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('Just now');
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [formData, setFormData] = useState({
    registrationDate: new Date().toISOString().split('T')[0],
    registrationPlace: 'Hub',
    district: 'Bhopal',
    block: 'Phanda',
    gp: '',
    village: '',
    shgMember: '',
    hearAboutUs: '',
    hearAboutUsOther: '',
    fullName: '',
    mobile: '',
    altMobile: '',
    fatherName: '',
    gender: '',
    pwd: '',
    dob: '',
    email: '',
    socialCategory: '',
    familyIncome: '',
    gatewayStatus: '',
    cd_educationLevel: '',
    cd_currentlyEnrolled: '',
    cd_stream: '',
    cd_streamOther: '',
    cd_institution: '',
    cd_discontinuationReason: '',
    cd_discontinuationOther: '',
    cd_priorCounselling: '',
    cd_careerClarity: '',
    cd_aspirationType: '',
    cd_mainGoal: '',
    ee_education: '',
    ee_experience: '',
    ee_income: '',
    ee_priorTraining: '',
    ee_mainGoals: [] as string[],
    ee_sectors: [] as string[],
    ee_sectorsOther: '',
    testStatus: 'Appeared',
    pathwayLinkage: '',
    careerSector: '',
    careerSectorOther: '',
    careerInterests: [] as string[]
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setLastSaved('30s ago');
    }, 30000);
    return () => clearInterval(timer);
  }, []);
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    setLastSaved('Just now');
  };
  const calculateAge = (dob: string) => {
    if (!dob) return '';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  };
  const age = calculateAge(formData.dob);
  const isAgeValid = age === '' || age >= 15 && age <= 29;
  const selectLead = (lead: any) => {
    setFormData((prev) => ({
      ...prev,
      fullName: lead.name,
      mobile: lead.mobile,
      gatewayStatus: lead.gateway
    }));
    setSelectedLead(lead);
    setRegistrationSource('lead');
    setStep(1);
  };
  const startDirectRegistration = () => {
    setRegistrationSource('direct');
    setStep(1);
  };
  const handleNextStep = () => {
    if (step === 1 && !formData.email) {
      setShowEmailSkipModal(true);
    } else {
      setStep((s) => Math.min(3, s + 1));
    }
  };
  const handleBackStep = () => {
    if (step === 1) {
      setStep(0);
      setRegistrationSource(null);
      setSelectedLead(null);
    } else {
      setStep((s) => Math.max(0, s - 1));
    }
  };
  const renderEntryPoint = () =>
  <div className="p-6">
      <Card className="p-6">
        <div className="flex border-b border-[#ededed] mb-6">
          <button
          className={`px-4 py-2 border-b-2 font-medium transition-colors ${registrationSource !== 'direct' ? 'border-[#16A34A] text-[#16A34A]' : 'border-transparent text-[#525252] hover:text-[#383838]'}`}
          onClick={() => setRegistrationSource(null)}>
          
            Register from Lead
          </button>
          <button
          className={`px-4 py-2 border-b-2 font-medium transition-colors ${registrationSource === 'direct' ? 'border-[#16A34A] text-[#16A34A]' : 'border-transparent text-[#525252] hover:text-[#383838]'}`}
          onClick={() => setRegistrationSource('direct')}>
          
            Direct Registration
          </button>
        </div>

        {registrationSource !== 'direct' ?
      <>
            <div className="relative max-w-md mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c7c7c] w-4 h-4" />
              <input
            type="text"
            placeholder="Search by name or mobile number..."
            className="w-full pl-10 pr-4 h-7 border border-[#c7c7c7] rounded-lg bg-[#f3f3f3] focus:outline-none focus:border-[#0289f7] text-[14px]"
            style={{
              fontWeight: 420
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
          
            </div>

            <div className="border border-[#ededed] rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-[#f8f8f8] border-b border-[#ededed]">
                  <tr>
                    <th className="px-4 py-2 text-left text-[12px] font-[420] text-[#525252]">
                      Name
                    </th>
                    <th className="px-4 py-2 text-left text-[12px] font-[420] text-[#525252]">
                      Mobile
                    </th>
                    <th className="px-4 py-2 text-left text-[12px] font-[420] text-[#525252]">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left text-[12px] font-[420] text-[#525252]">
                      Gateway
                    </th>
                    <th className="px-4 py-2 text-right text-[12px] font-[420] text-[#525252]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-[#ededed] hover:bg-[#f8f8f8]">
                    <td
                  className="px-4 py-3 text-[14px] font-medium text-[#383838]"
                  style={{
                    fontWeight: 420
                  }}>
                  
                      Rahul Sharma
                    </td>
                    <td
                  className="px-4 py-3 text-[14px] text-[#383838]"
                  style={{
                    fontWeight: 420
                  }}>
                  
                      9876543210
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Converted
                      </span>
                    </td>
                    <td
                  className="px-4 py-3 text-[14px] text-[#383838]"
                  style={{
                    fontWeight: 420
                  }}>
                  
                      Student
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button
                    size="sm"
                    onClick={() =>
                    selectLead({
                      id: 1,
                      name: 'Rahul Sharma',
                      mobile: '9876543210',
                      gateway: 'Student'
                    })
                    }>
                    
                        Select
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </> :

      <div className="text-center py-12">
            <p
          className="text-[14px] text-[#525252] mb-6"
          style={{
            fontWeight: 420
          }}>
          
              No lead selected. Form will open with empty fields.
            </p>
            <Button onClick={startDirectRegistration}>
              Start Registration →
            </Button>
          </div>
      }
      </Card>
    </div>;

  const renderStep1 = () =>
  <div className="p-6">
      {selectedLead &&
    <div className="mb-4 flex items-center justify-between bg-[#f8f8f8] px-4 py-2 rounded-lg border border-[#ededed]">
          <span className="text-[13px] text-[#525252]">
            Source: Lead ({selectedLead.name})
          </span>
          <button
        className="text-[13px] text-[#16A34A] hover:text-[#15803D] font-medium"
        onClick={() => {
          setStep(0);
          setSelectedLead(null);
        }}>
        
            Change Lead
          </button>
        </div>
    }

      <FrappeForm>
        <FrappeSection title="Gateway & Identification" columns={2}>
          <div className="col-span-full mb-2 p-3 bg-blue-50 text-blue-800 text-[13px] rounded-lg flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> This determines the
            registration track in Step 2.
          </div>
          <FrappeField
          label="What is your current status? (Gateway)"
          type="Select"
          options={[
          'Student',
          'Employed',
          'Trade / Self-Employed',
          'Not Engaged']
          }
          value={formData.gatewayStatus}
          onChange={(v) => handleInputChange('gatewayStatus', v)}
          mandatory />
        
        </FrappeSection>

        <FrappeSection title="Registration Details" columns={4}>
          <FrappeField
          label="Date of Registration"
          type="Date"
          value={formData.registrationDate}
          readOnly />
        
          <FrappeField
          label="Place of Registration"
          type="Select"
          options={['Hub', 'Field']}
          value={formData.registrationPlace}
          onChange={(v) => handleInputChange('registrationPlace', v)}
          mandatory />
        
          <FrappeField
          label="District"
          type="Data"
          value="Bhopal"
          readOnly
          helpText="Auto from hub" />
        
          <FrappeField
          label="Block"
          type="Data"
          value="Phanda"
          readOnly
          helpText="Auto from hub" />
        
          <FrappeField
          label="Gram Panchayat"
          type="Select"
          options={['Phanda GP', 'Mendora GP', 'Ratua Bhainsakhedi GP']}
          value={formData.gp}
          onChange={(v) => handleInputChange('gp', v)}
          mandatory />
        
          <FrappeField
          label="Village"
          type="Select"
          options={['Phanda', 'Mendora', 'Ratua', 'Bhainsakhedi']}
          value={formData.village}
          onChange={(v) => handleInputChange('village', v)}
          mandatory />
        
          <FrappeField
          label="Is any household member part of an SHG?"
          type="Select"
          options={['Yes', 'No']}
          value={formData.shgMember}
          onChange={(v) => handleInputChange('shgMember', v)}
          mandatory />
        
          <FrappeField
          label="How did you hear about us?"
          type="Select"
          options={[
          'Saarthi',
          'GP Official',
          'Social Media',
          'School/College',
          'Other']
          }
          value={formData.hearAboutUs}
          onChange={(v) => handleInputChange('hearAboutUs', v)}
          mandatory />
        
          {formData.hearAboutUs === 'Other' &&
        <FrappeField
          label="Please specify"
          type="Data"
          value={formData.hearAboutUsOther}
          onChange={(v) => handleInputChange('hearAboutUsOther', v)}
          mandatory
          placeholder="How did you hear about us?" />

        }
        </FrappeSection>

        <FrappeSection title="Basic Details" columns={4}>
          <div className="col-span-full mb-2 p-3 bg-blue-50 text-blue-800 text-[13px] rounded-lg flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> UID = Full Name + Mobile
            Number. Duplicate check runs on save.
          </div>
          <FrappeField
          label="Full Name"
          type="Data"
          value={formData.fullName}
          onChange={(v) => handleInputChange('fullName', v)}
          mandatory
          placeholder="In English, same as govt. ID" />
        
          <FrappeField
          label="Mobile Number"
          type="Data"
          inputType="tel"
          value={formData.mobile}
          onChange={(v) => handleInputChange('mobile', v)}
          mandatory
          placeholder="10 digits" />
        
          <FrappeField
          label="Alternative Mobile Number"
          type="Data"
          inputType="tel"
          value={formData.altMobile}
          onChange={(v) => handleInputChange('altMobile', v)}
          helpText="Parent / Guardian number" />
        
          <FrappeField
          label="Father's / Husband's Name"
          type="Data"
          value={formData.fatherName}
          onChange={(v) => handleInputChange('fatherName', v)}
          mandatory />
        
          <FrappeField
          label="Gender"
          type="Select"
          options={['Male', 'Female', 'Transgender']}
          value={formData.gender}
          onChange={(v) => handleInputChange('gender', v)}
          mandatory />
        
          <FrappeField
          label="Person with Disability (PwD)"
          type="Select"
          options={['Yes', 'No']}
          value={formData.pwd}
          onChange={(v) => handleInputChange('pwd', v)}
          mandatory />
        
          <FrappeField
          label="Date of Birth"
          type="Date"
          value={formData.dob}
          onChange={(v) => handleInputChange('dob', v)}
          mandatory />
        
          <FrappeField
          label="Age"
          type="Int"
          value={age}
          readOnly
          error={
          !isAgeValid ?
          'Candidate must be between 15 and 29 years old' :
          undefined
          } />
        
          <FrappeField
          label="Social Category"
          type="Select"
          options={['SC', 'ST', 'OBC', 'General']}
          value={formData.socialCategory}
          onChange={(v) => handleInputChange('socialCategory', v)}
          mandatory />
        
          <FrappeField
          label="Approximate Monthly Family Income"
          type="Select"
          options={[
          'Less than ₹5,000',
          '₹5,000 – ₹10,000',
          '₹10,000 – ₹20,000',
          '₹20,000 – ₹40,000',
          'Above ₹40,000',
          "Don't Know"]
          }
          value={formData.familyIncome}
          onChange={(v) => handleInputChange('familyIncome', v)}
          mandatory />
        
          <FrappeField
          label="e-Mail ID"
          type="Data"
          inputType="email"
          value={formData.email}
          onChange={(v) => handleInputChange('email', v)}
          placeholder="email@example.com" />
        
        </FrappeSection>
      </FrappeForm>
    </div>;

  const renderStep2CD = () =>
  <div className="p-6">
      <div className="mb-4 p-3 border border-[#0289f7]/30 bg-blue-50 rounded-lg flex items-center gap-3 text-[13px] text-[#383838]">
        <span className="bg-[#0289f7] text-white px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">
          Logic
        </span>
        <span>If Gateway Q1.5 = 'Student'</span>
        <ArrowRight className="w-3.5 h-3.5" />
        <span className="font-semibold">Then Show Career Discovery Track</span>
      </div>

      <FrappeForm>
        <FrappeSection title="Career Discovery Registration" columns={2}>
          <FrappeField
          label="Current Education Level"
          type="Select"
          options={[
          'Class 9',
          'Class 10',
          'Class 11',
          'Class 12',
          '12th Pass (not studying)',
          'ITI/Diploma (current)',
          'ITI/Diploma (completed)',
          'UG Year 1',
          'UG Year 2',
          'UG Year 3/Final',
          'PG']
          }
          value={formData.cd_educationLevel}
          onChange={(v) => handleInputChange('cd_educationLevel', v)}
          mandatory />
        
          <FrappeField
          label="Are you currently enrolled?"
          type="Select"
          options={[
          'Yes, currently studying',
          'No, completed and stopped',
          'No, dropped out']
          }
          value={formData.cd_currentlyEnrolled}
          onChange={(v) => handleInputChange('cd_currentlyEnrolled', v)}
          mandatory />
        
          <FrappeField
          label="Stream / Subject"
          type="Select"
          options={[
          'Arts/Humanities',
          'Commerce',
          'Science (PCM)',
          'Science (PCB)',
          'Vocational/ITI',
          'Other (specify)']
          }
          value={formData.cd_stream}
          onChange={(v) => handleInputChange('cd_stream', v)}
          mandatory />
        
          {formData.cd_stream === 'Other (specify)' &&
        <FrappeField
          label="Please specify stream"
          type="Data"
          value={formData.cd_streamOther}
          onChange={(v) => handleInputChange('cd_streamOther', v)}
          mandatory />

        }
          <FrappeField
          label="Name of Current or Last Institution"
          type="Data"
          value={formData.cd_institution}
          onChange={(v) => handleInputChange('cd_institution', v)}
          mandatory
          placeholder="Open text, not a master list" />
        

          {(formData.cd_currentlyEnrolled === 'No, completed and stopped' ||
        formData.cd_currentlyEnrolled === 'No, dropped out') &&
        <>
              <FrappeField
            label="Reason for Discontinuation"
            type="Select"
            options={[
            'Financial constraints',
            'Lack of Information',
            'Lack of Clarity regarding Career',
            'No institution nearby',
            'Other (specify)']
            }
            value={formData.cd_discontinuationReason}
            onChange={(v) =>
            handleInputChange('cd_discontinuationReason', v)
            }
            mandatory />
          
              {formData.cd_discontinuationReason === 'Other (specify)' &&
          <FrappeField
            label="Please specify reason"
            type="Data"
            value={formData.cd_discontinuationOther}
            onChange={(v) =>
            handleInputChange('cd_discontinuationOther', v)
            }
            mandatory />

          }
            </>
        }

          <FrappeField
          label="Have you received any career counselling before?"
          type="Select"
          options={['Yes', 'No']}
          value={formData.cd_priorCounselling}
          onChange={(v) => handleInputChange('cd_priorCounselling', v)}
          mandatory />
        
          <FrappeField
          label="Career Clarity Self-Assessment"
          type="Select"
          options={[
          'Very clear about my career direction',
          'Somewhat clear',
          'Not clear at all']
          }
          value={formData.cd_careerClarity}
          onChange={(v) => handleInputChange('cd_careerClarity', v)}
          mandatory
          helpText="Baseline score for outcome indicators" />
        
          <FrappeField
          label="Career Aspiration Type"
          type="Select"
          options={[
          'Government job',
          'Private sector job',
          'Own business',
          'Skilled trade',
          'Teaching',
          'Higher studies / Research',
          'Not decided']
          }
          value={formData.cd_aspirationType}
          onChange={(v) => handleInputChange('cd_aspirationType', v)}
          mandatory />
        
          <FrappeField
          label="What is your main goal for joining?"
          type="Select"
          options={[
          'Understand Academic/Stream/Career Options post 10th/12th',
          'Explore professional Courses and Career Options post 12th or UG',
          'Explore HE/Specialisation post UG/PG']
          }
          value={formData.cd_mainGoal}
          onChange={(v) => handleInputChange('cd_mainGoal', v)}
          mandatory />
        
        </FrappeSection>
      </FrappeForm>
    </div>;

  const renderStep2EE = () =>
  <div className="p-6">
      <div className="mb-4 p-3 border border-[#16A34A]/30 bg-green-50 rounded-lg flex items-center gap-3 text-[13px] text-[#383838]">
        <span className="bg-[#16A34A] text-white px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">
          Logic
        </span>
        <span>If Gateway Q1.5 = '{formData.gatewayStatus}'</span>
        <ArrowRight className="w-3.5 h-3.5" />
        <span className="font-semibold">
          Then Show Employment & Entrepreneurship Track
        </span>
      </div>

      <FrappeForm>
        <FrappeSection
        title="Employment & Entrepreneurship Registration"
        columns={2}>
        
          <FrappeField
          label="Educational Qualification"
          type="Select"
          options={[
          'Illiterate',
          'Primary',
          'Upper Primary',
          'High School',
          'Senior Secondary',
          'Graduate/Diploma and Above']
          }
          value={formData.ee_education}
          onChange={(v) => handleInputChange('ee_education', v)}
          mandatory />
        
          <FrappeField
          label="Years of Prior Work Experience"
          type="Select"
          options={[
          '0 (No experience)',
          'Less than 1 year',
          '1 – 3 years',
          'More than 3 years']
          }
          value={formData.ee_experience}
          onChange={(v) => handleInputChange('ee_experience', v)}
          mandatory />
        
          <FrappeField
          label="Current Occupation Status"
          type="Data"
          value={formData.gatewayStatus}
          readOnly
          helpText="Carried forward from gateway question" />
        
          <FrappeField
          label="Last Monthly Income or Profit"
          type="Select"
          options={[
          '₹0 (No income)',
          'Less than ₹10,000',
          '₹10,000 – ₹20,000',
          '₹20,000 – ₹50,000',
          'Above ₹50,000']
          }
          value={formData.ee_income}
          onChange={(v) => handleInputChange('ee_income', v)}
          mandatory
          helpText={
          formData.gatewayStatus === 'Not Engaged' ?
          "Required even for 'Not Engaged'" :
          ''
          } />
        
          <FrappeField
          label="Have you received any skill training before?"
          type="Select"
          options={['Yes', 'No']}
          value={formData.ee_priorTraining}
          onChange={(v) => handleInputChange('ee_priorTraining', v)}
          mandatory />
        

          <div className="col-span-full mt-4">
            <div className="flex items-center mb-2">
              <label className="text-[12px] font-semibold text-[#525252]">
                What is your main goal for joining this programme?
              </label>
              <span className="text-[#e03636] ml-1">*</span>
            </div>
            <p className="text-[12px] text-[#7c7c7c] mb-4">
              Select 1 to 3 options. This drives cohorting suggestions.
            </p>

            <MultiSelect
            options={[
            {
              value: 'Find Some Employment',
              maps_to_cohort: 'Starter (P1)',
              color: '#16A34A'
            },
            {
              value: 'Enhance my Skill and Improve on Current Employment',
              maps_to_cohort: 'Grower (P1)',
              color: '#0891B2'
            },
            {
              value: 'Switch Job',
              maps_to_cohort: 'Advancer (P1)',
              color: '#7C3AED'
            },
            {
              value: 'Become some Entrepreneur',
              maps_to_cohort: 'Explorer (P2)',
              color: '#D97706'
            },
            {
              value: 'Launch my Business',
              maps_to_cohort: 'Seeker (P2)',
              color: '#6B7280'
            },
            {
              value: 'Scale up my current enterprise',
              maps_to_cohort: 'Builder (P2)',
              color: '#DC2626'
            }]
            }
            selectedValues={formData.ee_mainGoals}
            onChange={(v) => handleInputChange('ee_mainGoals', v)}
            minSelections={1}
            maxSelections={3} />
          
          </div>

          <div className="col-span-full mt-4">
            <FrappeField
            label="Top 3 Sectors You Are Most Interested In"
            type="Table MultiSelect"
            options={[
            'Agriculture',
            'Retail/Trade',
            'Beauty & Wellness',
            'Construction',
            'ITeS/Computers',
            'Healthcare',
            'Tourism/Hospitality',
            'Other (specify)']
            }
            value={formData.ee_sectors}
            onChange={(v) => handleInputChange('ee_sectors', v)}
            mandatory />
          
            {formData.ee_sectors.includes('Other (specify)') &&
          <div className="mt-4 w-1/2">
                <FrappeField
              label="Please specify sector"
              type="Data"
              value={formData.ee_sectorsOther}
              onChange={(v) => handleInputChange('ee_sectorsOther', v)}
              mandatory />
            
              </div>
          }
          </div>
        </FrappeSection>
      </FrappeForm>
    </div>;

  const renderStep3 = () =>
  <div className="p-6">
      <FrappeForm>
        <FrappeSection title="Screening Test & Pathway Assignment" columns={2}>
          <FrappeField
          label="Test Status"
          type="Select"
          options={['Appeared', 'Skipped']}
          value={formData.testStatus}
          onChange={(v) => handleInputChange('testStatus', v)}
          readOnly
          helpText="Auto-set on test completion" />
        
          <FrappeField
          label="Pathway Linkage"
          type="Select"
          options={[
          'Higher Education / Career Discovery',
          'Employment',
          'Entrepreneurship']
          }
          value={formData.pathwayLinkage}
          onChange={(v) => handleInputChange('pathwayLinkage', v)}
          mandatory
          helpText="Final pathway assignment" />
        

          {(formData.pathwayLinkage === 'Employment' ||
        formData.pathwayLinkage === 'Entrepreneurship') &&
        <>
              <FrappeField
            label="Career Sector Chosen"
            type="Select"
            options={[
            'Agriculture',
            'Retail/Trade',
            'Beauty & Wellness',
            'Construction',
            'ITeS/Computers',
            'Healthcare',
            'Tourism/Hospitality',
            'Other (specify)']
            }
            value={formData.careerSector}
            onChange={(v) => handleInputChange('careerSector', v)}
            mandatory />
          
              {formData.careerSector === 'Other (specify)' &&
          <FrappeField
            label="Please specify sector"
            type="Data"
            value={formData.careerSectorOther}
            onChange={(v) => handleInputChange('careerSectorOther', v)}
            mandatory />

          }
            </>
        }

          {formData.pathwayLinkage ===
        'Higher Education / Career Discovery' &&
        <FrappeField
          label="Career Interest Areas Identified (Top 3)"
          type="Table MultiSelect"
          options={[
          'Agriculture & Allied',
          'Healthcare & Nursing',
          'Engineering & Technology',
          'Education & Teaching',
          'Business & Management',
          'Creative Arts & Design',
          'IT & Computers',
          'Government Services',
          'Skilled Trades']
          }
          value={formData.careerInterests}
          onChange={(v) => handleInputChange('careerInterests', v)}
          mandatory />

        }
        </FrappeSection>
      </FrappeForm>
    </div>;

  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title="Registration Wizard"
        breadcrumbs={[
        {
          label: 'Home'
        },
        {
          label: 'Candidates'
        },
        {
          label: 'New Registration'
        }]
        }
        secondaryActions={
        step > 0 &&
        <div className="flex items-center gap-4">
              <span className="text-[13px] text-[#525252] flex items-center gap-1">
                <Save className="w-4 h-4" /> Saved {lastSaved}
              </span>
              <Button variant="secondary" size="sm">
                Save as Draft
              </Button>
            </div>

        } />
      

      {step === 0 && renderEntryPoint()}

      {step > 0 &&
      <div>
          <FrappeFormTabs
          steps={[
          {
            id: 1,
            label: 'Common Core'
          },
          {
            id: 2,
            label: 'Track Details'
          },
          {
            id: 3,
            label: 'Screening & Pathway'
          }]
          }
          currentStep={step}
          onStepClick={(id) => {
            if (id <= step) setStep(id);
          }} />
        

          {step === 1 && renderStep1()}
          {step === 2 &&
        formData.gatewayStatus === 'Student' &&
        renderStep2CD()}
          {step === 2 &&
        formData.gatewayStatus !== 'Student' &&
        formData.gatewayStatus !== '' &&
        renderStep2EE()}
          {step === 2 && formData.gatewayStatus === '' &&
        <div className="text-center py-12 text-[#525252]">
              Please go back and select a Gateway Status in Step 1.
            </div>
        }
          {step === 3 && renderStep3()}

          <div className="mt-8 pt-6 border-t border-[#ededed] flex items-center justify-between px-6 pb-6">
            <Button variant="ghost" onClick={handleBackStep}>
              ← Back
            </Button>

            {step < 3 ?
          <Button
            onClick={handleNextStep}
            disabled={step === 1 && !formData.gatewayStatus}>
            
                Next: {step === 1 ? 'Track Details' : 'Screening'} →
              </Button> :

          <Button
            variant="success"
            onClick={() => alert('Registration Submitted!')}>
            
                Submit Registration ✓
              </Button>
          }
          </div>
        </div>
      }

      {/* Email Skip Modal */}
      <Modal
        isOpen={showEmailSkipModal}
        onClose={() => setShowEmailSkipModal(false)}
        title="Email Not Provided">
        
        <div className="space-y-4">
          <p
            className="text-[14px] text-[#525252]"
            style={{
              fontWeight: 420
            }}>
            
            We recommend providing an email address for better communication and
            updates.
          </p>
          <div className="flex gap-3 pt-4">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => {
                setShowEmailSkipModal(false);
                setStep((s) => Math.min(3, s + 1));
              }}>
              
              Skip
            </Button>
            <Button fullWidth onClick={() => setShowEmailSkipModal(false)}>
              Add Email
            </Button>
          </div>
        </div>
      </Modal>

      {/* Duplicate Modal */}
      <Modal
        isOpen={showDuplicateModal}
        onClose={() => setShowDuplicateModal(false)}
        title="⚠ Existing Record Found">
        
        <div className="space-y-4">
          <p
            className="text-[14px] text-[#525252]"
            style={{
              fontWeight: 420
            }}>
            
            A candidate with this name and mobile number already exists:
          </p>
          <div className="bg-[#f8f8f8] p-4 rounded-lg border border-[#ededed] space-y-2 text-[13px]">
            <div className="grid grid-cols-3">
              <span className="text-[#525252]">Name:</span>
              <span className="col-span-2 font-medium text-[#383838]">
                Rajesh Kumar
              </span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-[#525252]">Mobile:</span>
              <span className="col-span-2 font-medium text-[#383838]">
                9876543210
              </span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-[#525252]">Status:</span>
              <span className="col-span-2 font-medium text-[#16A34A]">
                Pathway Active (P1 - Employability)
              </span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-[#525252]">Hub:</span>
              <span className="col-span-2 font-medium text-[#383838]">
                Sehore Town Hub
              </span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-[#525252]">Last Updated:</span>
              <span className="col-span-2 font-medium text-[#383838]">
                15 Mar 2026
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => setShowDuplicateModal(false)}>
              
              Cancel
            </Button>
            <Button
              variant="secondary"
              fullWidth
              onClick={() => setShowDuplicateModal(false)}>
              
              Continue as New
            </Button>
            <Button fullWidth onClick={() => setShowDuplicateModal(false)}>
              View Existing Record
            </Button>
          </div>
        </div>
      </Modal>
    </div>);

}