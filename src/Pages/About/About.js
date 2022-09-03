import React from 'react';

// https://web.programming-hero.com/update-1/video/update-1-71-3-create-simple-top-banner-using-hero-component
// https://web.programming-hero.com/update-1/video/update-1-71-4-decide-one-component-or-multiple-for-info-cards
// https://web.programming-hero.com/update-1/video/update-1-71-5-make-info-card-dynamic-with-dynamic-css-class
// https://web.programming-hero.com/update-1/video/update-1-71-6-responsive-grid-for-services-section
// https://web.programming-hero.com/update-1/video/update-1-71-7-pop-image-out-of-the-section-in-appointment-section
// https://web.programming-hero.com/update-1/video/update-1-71-8-add-testimonials-with-avatar-and-fake-data
// https://web.programming-hero.com/update-1/video/update-1-71-9-module-summary-and-set-footer
// https://web.programming-hero.com/update-1/video/update-1-72-1-module-introduction-recap-and-appointment-page
// https://web.programming-hero.com/update-1/video/update-1-72-2-create-appointment-banner-using-react-day-picker
// https://web.programming-hero.com/update-1/video/update-1-72-3-lift-up-state-to-share-data-and-available-appointment-component
// https://web.programming-hero.com/update-1/video/update-1-72-4-booking-options-and-available-slots-with-conditional-rendering
// https://web.programming-hero.com/update-1/video/update-1-72-5-display-a-modal-from-on-booking-click-with-dynamic-data
// https://web.programming-hero.com/update-1/video/update-1-72-6-create-booking-form-inside-booking-modal-
// https://web.programming-hero.com/update-1/video/update-1-72-7-simple-node-mongo-server-for-doctors-portal-
// https://web.programming-hero.com/update-1/video/update-1-72-8-connect-mongodb-and-load-services-from-database
// https://web.programming-hero.com/update-1/video/update-1-72-9-module-summary-

// https://web.programming-hero.com/update-1/video/update-1-73-1-module-introduction-and-firebase-project-setup
// https://web.programming-hero.com/update-1/video/update-1-73-2-setup-login-page-implement-sign-in-with-google
// https://web.programming-hero.com/update-1/video/update-1-73-3-explore-react-hook-form-and-create-email-input
// https://web.programming-hero.com/update-1/video/update-1-73-4-create-login-form-using-react-hook-form-validation
// https://web.programming-hero.com/update-1/video/update-1-73-5-handle-login-error-and-display-loading-spinner
// https://web.programming-hero.com/update-1/video/update-1-73-6-implement-registration-form-to-create-new-user
// https://web.programming-hero.com/update-1/video/update-1-73-7-update-user-name-and-implement-conditional-sign-out
// https://web.programming-hero.com/update-1/video/update-1-73-8-require-auth-and-redirect-user-to-the-page-they-wanted-to-go
// https://web.programming-hero.com/update-1/video/update-1-73-9-module-summary-and-clear-all-warnings

// https://web.programming-hero.com/update-1/video/update-1-73_5-1-practice-calendar-forget-password-verify-email-documentation
// https://web.programming-hero.com/update-1/post/update-1-text-instruction-important-module-74-final-project-part-4-dashboard-
// https://web.programming-hero.com/update-1/video/update-1-74-1-module-overview-and-create-booking-object-to-save
// https://web.programming-hero.com/update-1/video/update-1-74-2-api-naming-convention-and-simple-booking-api
// https://web.programming-hero.com/update-1/video/update-1-74-3-limit-one-booking-per-user-per-treatment-per-day
// https://web.programming-hero.com/update-1/video/update-1-74-4-interesting-find-available-time-slots-for-a-day
// https://web.programming-hero.com/update-1/video/update-1-74-5-recap-load-available-time-slots-based-on-the-date
// https://web.programming-hero.com/update-1/video/update-1-74-6-simple-overview-of-react-query-to-update-slots-automatically
// https://web.programming-hero.com/update-1/video/update-1-74-7-create-dashboard-route-with-drawer-and-nested-route
// https://web.programming-hero.com/update-1/video/update-1-74-8-display-user-specific-appointments-using-data-table
// https://web.programming-hero.com/update-1/video/update-1-74-9-module-summary-and-my-history

// https://web.programming-hero.com/update-1/video/update-1-75-1-module-introduction-and-user-creation-process
// https://web.programming-hero.com/update-1/video/update-1-75-2-save-registered-user-information-in-the-database
// https://web.programming-hero.com/update-1/video/update-1-75-3-issue-simple-jwt-token-and-store-it-in-the-local-storage
// https://web.programming-hero.com/update-1/video/update-1-75-4-send-jwt-token-to-back-end-for-verification
// https://web.programming-hero.com/update-1/video/update-1-75-5-verify-jwt-token-and-handle-unauthorized-access
// https://web.programming-hero.com/update-1/video/update-1-75-6-load-all-users-on-the-admin-page
// https://web.programming-hero.com/update-1/video/update-1-75-7-create-api-to-make-user-an-admin
// https://web.programming-hero.com/update-1/video/update-1-75-8-limit-dashboard-features-based-on-admin-level-access
// https://web.programming-hero.com/update-1/video/update-1-75-9-bonus-prevent-accessing-admin-route-via-url

// https://web.programming-hero.com/update-1/video/update-1-75_5-1-deploy-doctors-portal-to-heroku-and-firebase

// https://web.programming-hero.com/update-1/video/update-1-76-1-module-overview-and-add-a-doctor-admin-route-setup
// https://web.programming-hero.com/update-1/video/update-1-76-2-load-services-with-data-project-and-add-file-type-input
// https://web.programming-hero.com/update-1/video/update-1-76-3-upload-image-to-imgbb-server-and-get-image-url
// https://web.programming-hero.com/update-1/video/update-1-76-4-save-doctor-info-in-the-database-and-display-success-message
// https://web.programming-hero.com/update-1/video/update-1-76-5-verifyadmin-middleware-and-load-all-doctors
// https://web.programming-hero.com/update-1/video/update-1-76-6-mange-doctors-and-delete-doctor-with-authorization
// https://web.programming-hero.com/update-1/video/update-1-76-7-optional-node-mailer-overview-and-create-of-send-grid-account
// https://web.programming-hero.com/update-1/video/update-1-76-8-optional-set-email-after-appointment-confirmation
// https://web.programming-hero.com/update-1/video/update-1-76-9-module-summary-and-delete-confirmation-modal

// https://web.programming-hero.com/update-1/video/update-1-77-1-module-overview-and-create-payment-route-
// https://web.programming-hero.com/update-1/video/update-1-77-2-create-payment-route-and-get-appointment-by-id
// https://web.programming-hero.com/update-1/video/update-1-77-3-load-appointment-specific-data-install-stripe-and-stripe-for-react
// https://web.programming-hero.com/update-1/video/update-1-77-4-basic-stipe-setup-and-with-simple-card-form-
// https://web.programming-hero.com/update-1/video/update-1-77-5-handle-payment-processing-error-and-success
// https://web.programming-hero.com/update-1/video/update-1-77-6-server-side-payment-intents-api-to-get-client-secret-from-stripe
// https://web.programming-hero.com/update-1/video/update-1-77-7-process-card-confirmation-for-payment-and-display-success-message-
// https://web.programming-hero.com/update-1/video/update-1-77-8-store-payment-on-database-and-update-appointment-data-as-well
// https://web.programming-hero.com/update-1/video/update-1-77-9-module-summary-and-payment-overview

const About = () => {
  return (
    <div>
      <h2>This is about</h2>
    </div>
  );
};

export default About;