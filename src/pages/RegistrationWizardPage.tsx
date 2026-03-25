import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { MultiSelect } from '../components/ui/MultiSelect';
import { FrappeForm, FrappeSection } from '../components/frappe/FrappeForm';
import { FrappeField } from '../components/frappe/FrappeField';
import { WizardProgress } from '../components/frappe/WizardProgress';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
import { Search, Save, AlertTriangle, ArrowRight } from 'lucide-react';
export function RegistrationWizardPage() {
  const [step, setStep] = useState(1);
  const [entryMode, setEntryMode] = useState<'lead' | 'direct'>('lead');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('Just now');
  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Common Core
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
    // Gateway Question (from Pre-Reg or Direct)
    gatewayStatus: '',
    // Step 2: Career Discovery (Student)
    cd_educationLevel: '',
    cd_currentlyEnrolled: '',
    cd_stream: '',
    cd_institution: '',
    cd_discontinuationReason: '',
    cd_discontinuationOther: '',
    cd_priorCounselling: '',
    cd_careerClarity: '',
    cd_aspirationType: '',
    cd_mainGoal: '',
    // Step 2: E&E (Others)
    ee_education: '',
    ee_experience: '',
    ee_income: '',
    ee_priorTraining: '',
    ee_mainGoals: [] as string[],
    ee_sectors: [] as string[],
    ee_sectorsOther: '',
    // Step 3: Screening & Pathway
    testStatus: 'Appeared',
    pathwayLinkage: '',
    careerSector: '',
    careerInterests: [] as string[]
  });
  // Auto-save simulation
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
  const handleMobileBlur = () => {
    if (formData.mobile === '9876543210') {
      setShowDuplicateModal(true);
    }
  };
  const selectLead = () => {
    setFormData((prev) => ({
      ...prev,
      fullName: 'Rahul Sharma',
      mobile: '9876543210',
      gatewayStatus: 'Student'
    }));
    setEntryMode('direct');
  };
  const renderStep1 = () =>
  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <FrappeSection title="Registration Details" columns={3}>
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
        label="District / Block"
        type="Data"
        value="Bhopal / Phanda"
        readOnly
        helpText="Auto from hub mapping" />
      
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
        'Camp / Event',
        'Self / Online',
        'Peer / Friend',
        'Others']
        }
        value={formData.hearAboutUs}
        onChange={(v) => handleInputChange('hearAboutUs', v)}
        mandatory />
      
        {formData.hearAboutUs === 'Others' &&
      <div className="animate-in slide-in-from-top-2">
            <FrappeField
          label="Please specify"
          type="Data"
          value={formData.hearAboutUsOther}
          onChange={(v) => handleInputChange('hearAboutUsOther', v)}
          mandatory
          placeholder="How did you hear about us?" />
        
          </div>
      }
      </FrappeSection>

      <FrappeSection title="Basic Details" columns={3}>
        <div className="col-span-full mb-2 p-3 bg-blue-50 text-blue-800 text-sm rounded-md flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> UID = Full Name + Mobile Number.
          Duplicate check runs on save.
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
        placeholder="10 digits"
        onBlur={handleMobileBlur} />
      
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
        label="e-Mail ID"
        type="Data"
        inputType="email"
        value={formData.email}
        onChange={(v) => handleInputChange('email', v)}
        placeholder="email@example.com" />
      

        {/* Gateway Question - Usually auto-populated from lead, but editable here if direct */}
        <div className="col-span-full mt-4">
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
          mandatory
          helpText="This determines the registration track in Step 2." />
        
        </div>
      </FrappeSection>

      <FrappeSection
      title="Socio-Economic Details"
      collapsible
      defaultExpanded
      columns={2}>
      
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
        '₹20,000 – ₹30,000',
        'More than ₹30,000']
        }
        value={formData.familyIncome}
        onChange={(v) => handleInputChange('familyIncome', v)}
        mandatory />
      
      </FrappeSection>
    </div>;

  const renderStep2CD = () =>
  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-md mb-6 flex items-center gap-3">
        <span className="text-xl">🎓</span>
        <span className="font-medium">
          Career Discovery Track — This candidate is a student
        </span>
      </div>

      <div className="mb-6 p-4 border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg flex items-center gap-3 text-sm text-blue-800">
        <span className="bg-blue-200 text-blue-900 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
          Conditional Logic
        </span>
        <span>If Gateway Q1.5 = 'Student'</span>
        <ArrowRight className="w-4 h-4 text-blue-400" />
        <span className="font-semibold">Then Show Career Discovery Track</span>
      </div>

      <FrappeSection title="Career Discovery Registration" columns={2}>
        <FrappeField
        label="Current Education Level"
        type="Select"
        options={[
        'Class 9',
        'Class 10',
        'Class 11',
        'Class 12',
        'ITI / Diploma',
        'Graduate',
        'Post-Graduate']
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
        'Arts / Humanities',
        'Commerce',
        'Science',
        'Vocational / ITI']
        }
        value={formData.cd_stream}
        onChange={(v) => handleInputChange('cd_stream', v)}
        mandatory />
      
        <FrappeField
        label="Name of Current or Last Institution"
        type="Data"
        value={formData.cd_institution}
        onChange={(v) => handleInputChange('cd_institution', v)}
        mandatory
        placeholder="Open text, not a master list" />
      

        {(formData.cd_currentlyEnrolled === 'No, completed and stopped' ||
      formData.cd_currentlyEnrolled === 'No, dropped out') &&
      <div className="animate-in slide-in-from-top-2 col-span-1">
            <FrappeField
          label="Reason for Discontinuation"
          type="Select"
          options={[
          'Financial constraints',
          'Lack of information / guidance',
          'Family pressure',
          'Marriage',
          'Health issues',
          'Others']
          }
          value={formData.cd_discontinuationReason}
          onChange={(v) => handleInputChange('cd_discontinuationReason', v)}
          mandatory />
        
            {formData.cd_discontinuationReason === 'Others' &&
        <div className="mt-4">
                <FrappeField
            label="Please specify reason"
            type="Data"
            value={formData.cd_discontinuationOther}
            onChange={(v) =>
            handleInputChange('cd_discontinuationOther', v)
            }
            mandatory />
          
              </div>
        }
          </div>
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
        'Confused about options',
        'No idea at all']
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
        'Start own business',
        'Higher education / research',
        'Undecided']
        }
        value={formData.cd_aspirationType}
        onChange={(v) => handleInputChange('cd_aspirationType', v)}
        mandatory />
      
        <FrappeField
        label="What is your main goal for joining?"
        type="Select"
        options={[
        'Understand academic / stream / career options post 10th/12th',
        'Explore professional courses and career options post 12th or graduation',
        'Get scholarship and education funding information',
        'Career guidance and mentoring support']
        }
        value={formData.cd_mainGoal}
        onChange={(v) => handleInputChange('cd_mainGoal', v)}
        mandatory />
      
      </FrappeSection>
    </div>;

  const renderStep2EE = () =>
  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6 flex items-center gap-3">
        <span className="text-xl">💼</span>
        <span className="font-medium">
          Employment & Entrepreneurship Track — {formData.gatewayStatus}
        </span>
      </div>

      <div className="mb-6 p-4 border-2 border-dashed border-green-300 bg-green-50 rounded-lg flex items-center gap-3 text-sm text-green-800">
        <span className="bg-green-200 text-green-900 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
          Conditional Logic
        </span>
        <span>If Gateway Q1.5 = '{formData.gatewayStatus}'</span>
        <ArrowRight className="w-4 h-4 text-green-400" />
        <span className="font-semibold">
          Then Show Employment & Entrepreneurship Track
        </span>
      </div>

      <FrappeSection
      title="Employment & Entrepreneurship Registration"
      columns={2}>
      
        <FrappeField
        label="Educational Qualification"
        type="Select"
        options={[
        'Illiterate',
        'Primary (1-5)',
        'Middle (6-8)',
        'Secondary (9-10)',
        'Senior Secondary (11-12)',
        'Graduate',
        'Post-Graduate']
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
        '₹20,000 – ₹30,000',
        'More than ₹30,000']
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
            <label className="text-sm font-medium text-gray-900">
              What is your main goal for joining this programme?
            </label>
            <span className="text-red-500 ml-1">*</span>
            <span className="ml-2 text-[10px] font-mono bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">
              2.EE.5
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-4">
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
            value: 'Get a Better Job / Switch Career',
            maps_to_cohort: 'Advancer (P1)',
            color: '#7C3AED'
          },
          {
            value: 'Start My Own Enterprise',
            maps_to_cohort: 'Explorer (P2)',
            color: '#D97706'
          },
          {
            value: 'Grow / Scale My Existing Business',
            maps_to_cohort: 'Builder (P2)',
            color: '#DC2626'
          },
          {
            value: 'Explore My Options',
            maps_to_cohort: 'Seeker (P2)',
            color: '#6B7280'
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
          'Automotive',
          'Banking & Finance',
          'Beauty & Wellness',
          'Construction',
          'Education',
          'IT/ITES',
          'Retail',
          'Other']
          }
          value={formData.ee_sectors}
          onChange={(v) => handleInputChange('ee_sectors', v)}
          mandatory />
        
          {formData.ee_sectors.includes('Other') &&
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
    </div>;

  const renderStep3 = () => {
    // Auto-suggest pathway based on previous steps
    useEffect(() => {
      if (!formData.pathwayLinkage) {
        if (formData.gatewayStatus === 'Student') {
          handleInputChange(
            'pathwayLinkage',
            'Higher Education / Career Discovery'
          );
        } else if (
        formData.ee_mainGoals.some(
          (g) => g.includes('Employment') || g.includes('Job')
        ))
        {
          handleInputChange('pathwayLinkage', 'Employment');
        }
      }
    }, []);
    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-300">
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
          <FrappeField
            label="Career Sector Chosen"
            type="Select"
            options={[
            'Agriculture',
            'Automotive',
            'Banking & Finance',
            'IT/ITES',
            'Retail']
            }
            value={formData.careerSector}
            onChange={(v) => handleInputChange('careerSector', v)}
            mandatory />

          }

          {formData.pathwayLinkage ===
          'Higher Education / Career Discovery' &&
          <FrappeField
            label="Career Interest Areas Identified (Top 3)"
            type="Table MultiSelect"
            options={['Science', 'Arts', 'Commerce', 'Vocational']}
            value={formData.careerInterests}
            onChange={(v) => handleInputChange('careerInterests', v)}
            mandatory />

          }
        </FrappeSection>
      </div>);

  };
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Registration Wizard
          </h1>
          <p className="text-sm text-gray-500 mt-1">Hub Coordinator View</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <Save className="w-4 h-4" /> Saved {lastSaved}
          </span>
          <Button variant="secondary">Save as Draft</Button>
        </div>
      </div>

      {step === 1 && entryMode === 'lead' &&
      <Card className="mb-8 p-6">
          <div className="flex border-b border-gray-200 mb-6">
            <button className="px-4 py-2 border-b-2 border-[#16A34A] text-[#16A34A] font-medium">
              Register from Lead
            </button>
            <button
            className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium"
            onClick={() => setEntryMode('direct')}>
            
              Direct Registration
            </button>
          </div>

          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
            type="text"
            placeholder="Search by name or mobile number..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#16A34A] focus:border-[#16A34A]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
          
          </div>

          <div className="border border-gray-200 rounded-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mobile
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Rahul Sharma
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    9876543210
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Converted
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button size="sm" onClick={selectLead}>
                      Select
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      }

      {(entryMode === 'direct' || step > 1) &&
      <FrappeForm>
          <WizardProgress
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
          currentStep={step} />
        

          {step === 1 && renderStep1()}
          {step === 2 &&
        formData.gatewayStatus === 'Student' &&
        renderStep2CD()}
          {step === 2 &&
        formData.gatewayStatus !== 'Student' &&
        formData.gatewayStatus !== '' &&
        renderStep2EE()}
          {step === 2 && formData.gatewayStatus === '' &&
        <div className="text-center py-12 text-gray-500">
              Please go back and select a Gateway Status in Step 1.
            </div>
        }
          {step === 3 && renderStep3()}

          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
            <Button
            variant="secondary"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}>
            
              ← Back
            </Button>

            {step < 3 ?
          <Button
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            disabled={step === 1 && !formData.gatewayStatus}>
            
                Next: {step === 1 ? 'Track Details' : 'Screening'} →
              </Button> :

          <Button onClick={() => alert('Registration Submitted!')}>
                Submit Registration ✓
              </Button>
          }
          </div>
        </FrappeForm>
      }

      <Modal
        isOpen={showDuplicateModal}
        onClose={() => setShowDuplicateModal(false)}
        title="⚠ Existing Record Found">
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            A candidate with this name and mobile number already exists:
          </p>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 space-y-2 text-sm">
            <div className="grid grid-cols-3">
              <span className="text-gray-500">Name:</span>
              <span className="col-span-2 font-medium">Rajesh Kumar</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-gray-500">Mobile:</span>
              <span className="col-span-2 font-medium">9876543210</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-gray-500">Status:</span>
              <span className="col-span-2 font-medium text-[#16A34A]">
                Pathway Active (P1 - Employability)
              </span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-gray-500">Hub:</span>
              <span className="col-span-2 font-medium">Sehore Town Hub</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-gray-500">Last Updated:</span>
              <span className="col-span-2 font-medium">15 Mar 2026</span>
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

  <div></div>;
}