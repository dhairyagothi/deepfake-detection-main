'use client';

import { useState } from 'react';
import { Upload, LinkIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DetectionResult from '@/components/DetectionResult';
import { toast } from 'sonner';

export default function Hero() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    if (imageUrl) {
      alert('Please clear the URL input first');
      e.target.value = '';
      return;
    }
    setFile(e.target.files[0]);
  };

  const handleUrlChange = (e) => {
    if (file) {
      alert('Please clear the file input first');
      e.target.value = '';
      return;
    }
    setImageUrl(e.target.value);
  };

  const clearFile = () => {
    setFile(null);
    const fileInput = document.getElementById('file-upload');
    if (fileInput) fileInput.value = '';
  };

  const clearUrl = () => {
    setImageUrl('');
  };

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload image');
      }

      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error("Failed to upload image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      let imageUrlToCheck = imageUrl;

      if (file) {
        const uploadData = await handleFileUpload(file);
        imageUrlToCheck = uploadData;
      }

      const response = await fetch(`/api/detect?imageUrl=${encodeURIComponent(imageUrlToCheck)}`, {
        method: 'GET',
      });

      const data = await response.json();
      toast.success("Deepfake detected successfully");
      setResult(data);
    } catch (error) {
      console.error('Error detecting deepfake:', error);
      toast.error("Failed to detect deepfake");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 py-40 flex justify-center items-center overflow-hidden">
      {/* Animated Glitch Effect */}
      <div className="absolute inset-0 z-10 bg-[url('/path-to-your-batman-glitch-background.jpg')] bg-cover bg-center opacity-50 animate-glitch"></div>

      {/* Hero Content */}
      <div className="mx-auto px-4 text-white z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-glow">DeepFake Detection Tool</h1>
          <p className="text-xl mb-8 text-gray-400">Upload an image or provide a link to identify potential deepfakes.</p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
            <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  asChild
                  className="w-48 bg-gray-800 hover:bg-gray-700"
                  disabled={!!imageUrl}
                >
                  <label htmlFor="file-upload" className="cursor-pointer flex items-center">
                    <Upload className="mr-2" />
                    {file ? 'File Selected: ' + file.name : 'Upload Image'}
                    <input
                      id="file-upload"
                      name="file"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                </Button>
                {file && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={clearFile}
                    className="flex-shrink-0"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                )}
              </div>

              <div className="flex items-center space-x-2 w-full md:w-96">
                <Input
                  type="text"
                  name="imageUrl"
                  placeholder="Or paste image URL"
                  value={imageUrl}
                  onChange={handleUrlChange}
                  disabled={!!file}
                  className="w-full bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
                {imageUrl && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={clearUrl}
                    className="flex-shrink-0"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-48 bg-primary hover:bg-primary-dark text-black"
              disabled={loading || (!file && !imageUrl)}
            >
              {loading ? 'Processing...' : 'Detect DeepFake'}
              <LinkIcon className="ml-2" />
            </Button>

            <DetectionResult result={result} />
          </form>
        </div>
      </div>
    </section>
  );
}
