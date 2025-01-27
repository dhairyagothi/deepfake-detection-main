import { AlertTriangle, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function WhyDangerous() {
  return (
    <section id="why-dangerous" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why are DeepFakes Dangerous?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-destructive mr-2" />
                Misinformation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Deepfakes can be used to create and spread false information, potentially influencing public opinion and undermining trust in media.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-6 w-6 text-destructive mr-2" />
                Privacy Concerns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Deepfake technology can be misused to violate personal privacy by creating fake compromising images or videos of individuals.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-destructive mr-2" />
                Financial Fraud
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Criminals can use deepfakes to impersonate others in video calls or create fake audio for financial scams and fraud.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}