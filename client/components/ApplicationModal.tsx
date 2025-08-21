import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  resume: string;
}

export default function ApplicationModal({ isOpen, onClose, jobTitle, jobId }: ApplicationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    resume: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage('Please upload only PDF, DOC, or DOCX files');
        return;
      }
      
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('File size should be less than 5MB');
        return;
      }
      
      setResumeFile(file);
      setErrorMessage('');
      
      // Convert to base64
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({
          ...prev,
          resume: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobId,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          resume: formData.resume
        })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          resume: ''
        });
        setResumeFile(null);
        
        // Close modal after 3 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit application');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        resume: ''
      });
      setResumeFile(null);
      setSubmitStatus('idle');
      setErrorMessage('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-blue-900">
            Apply for Position
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {jobTitle}
          </DialogDescription>
        </DialogHeader>
        
        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              Thank you for applying!
            </h3>
            <p className="text-gray-600">
              Your application has been submitted successfully. We'll review it and get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Enter your phone number"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Label htmlFor="resume">Upload Resume *</Label>
              <div className="mt-1">
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={isSubmitting}
                />
                <Label 
                  htmlFor="resume" 
                  className={`
                    flex items-center justify-center w-full h-20 px-4 py-2 
                    border-2 border-dashed border-gray-300 rounded-lg cursor-pointer 
                    hover:border-blue-500 transition-colors
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    {resumeFile ? (
                      <p className="text-sm text-green-600 font-medium">
                        {resumeFile.name}
                      </p>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-600">
                          Click to upload your resume
                        </p>
                        <p className="text-xs text-gray-400">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    )}
                  </div>
                </Label>
              </div>
            </div>
            
            {errorMessage && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}
            
            <DialogFooter className="flex gap-2 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting || !formData.fullName || !formData.email || !formData.phone || !formData.resume}
                className="bg-blue-900 hover:bg-blue-800"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
